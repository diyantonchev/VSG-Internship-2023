import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Modal } from 'react-bootstrap'
import { trackPromise, usePromiseTracker } from 'react-promise-tracker'
import BeatLoader from 'react-spinners/BeatLoader';

import MarketTrades from './MarketTrades';
import { ApplicationState, ExchangeState, Price } from '../types';
import {
  fetchPriceBinance,
  fetchPriceBitfinex,
  fetchPriceKraken
} from '../api';
// import { setExchange } from './redux/actions';
import { setExchange } from '../redux/reducers';

const PricesGrid = () => {
  const {
    cryptocurrencyPair,
    selectedExchange,
  } = useSelector<ApplicationState, ExchangeState>(state => state.exchange);

  const [rows, setRows] = useState<Price[]>([]);

  const dispatch = useDispatch();
  const { promiseInProgress } = usePromiseTracker();

  const fetchData = async () => {
    const pair = cryptocurrencyPair?.replace(/\W/, '');
    const binancePair = cryptocurrencyPair.match(/\W/) ? cryptocurrencyPair?.replace(/\W/, 'B') : cryptocurrencyPair;
    
    try {
      const data = await Promise.all([
        fetchPriceBinance(binancePair),
        fetchPriceBitfinex(pair),
        fetchPriceKraken(pair)
      ]);

      setRows(data);
    } catch (e) {
      setRows([]);
    }
  };

  useEffect(() => {
    if (cryptocurrencyPair) {
      trackPromise(fetchData());
    }

    const interval = setInterval(() => {
      if (cryptocurrencyPair) {
        fetchData();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [cryptocurrencyPair])

  const onPriceClick = (exchange: string) => {
    dispatch(setExchange(exchange));
  };

  const closeModal = () => {
    dispatch(setExchange(''));
  };

  const columns: GridColDef[] = [
    {
      field: 'exchange',
      headerName: 'Exchange',
      sortable: false,
      width: 260,
      editable: false,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 260,
      renderCell: ({ value, row }) => {
        const [first, second] = cryptocurrencyPair ? cryptocurrencyPair.split(/\W/) : [];
        const price = Number(value).toFixed(3);

        return <>
          {value ?
            (<a
              className='link-primary'
              role='button'
              onClick={() => onPriceClick(row?.exchange)}
            >
              {second ? `1 ${first} = ${price} ${second}` : price}
            </a>) : 'Pair is not supported '}
        </>
      },
      editable: false,
    }
  ];

  return (
    <div style={{ height: 400, width: '100%' }} className='text-center'>
      <BeatLoader color='#36D7B7' loading={promiseInProgress} margin={4} size={15} />
      {!promiseInProgress && (
        <DataGrid
          rows={rows}
          columns={columns}
          disableRowSelectionOnClick
        />
      )}
      <Modal show={!!selectedExchange?.length} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Market Trades</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MarketTrades />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PricesGrid;
