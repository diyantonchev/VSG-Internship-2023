import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

// import { setCryptocurrencyPair } from './redux/actions';
import { setCryptocurrencyPair } from '../redux/reducers';
import {
  fetchTradesBinance,
  fetchTradesBitfinex,
  fetchTradesHuobi,
  fetchTradesKraken
} from '../api';
import { EXCHANGES } from '../constants';
import { ApplicationState, ExchangeState, Trade } from '../types';

const MarketTrades = () => {
  const {
    cryptocurrencyPair,
    selectedExchange
  } = useSelector<ApplicationState, ExchangeState>(state => state.exchange);

  const [rows, setRows] = useState<Trade[]>([]);

  const dispatch = useDispatch();
  const { pair: pairUrlParams } = useParams();

  const [first, second] = useMemo(() => cryptocurrencyPair ? cryptocurrencyPair.split(/\W/) : [], [cryptocurrencyPair]);

  const fetchData = async () => {
    const pair = cryptocurrencyPair?.replace(/\W/, '');
    const binancePair = cryptocurrencyPair.match(/\W/) ? cryptocurrencyPair?.replace(/\W/, 'B') : cryptocurrencyPair;

    let data = [];

    switch (selectedExchange?.toLowerCase()) {
      case EXCHANGES.BINANCE:
        data = await fetchTradesBinance(binancePair)
        break;
      case EXCHANGES.BITFINEX:
        data = await fetchTradesBitfinex(pair)
        break;
      case EXCHANGES.HUOBI:
        data = await fetchTradesHuobi(pair.toLowerCase())
        break;
      case EXCHANGES.KRAKEN:
        data = await fetchTradesKraken(pair)
        break;
      default:
        data = await Promise.all([
          fetchTradesBinance(binancePair),
          fetchTradesBitfinex(pair),
          fetchTradesHuobi(pair),
          fetchTradesKraken(pair)
        ]);
        break;
    }

    setRows(data.flat());
  };

  useEffect(() => {
    if (!cryptocurrencyPair && pairUrlParams) {
      dispatch(setCryptocurrencyPair(pairUrlParams.toUpperCase()));
    }

    if (cryptocurrencyPair) {
      fetchData();
    }

    const interval = setInterval(() => {
      if (cryptocurrencyPair) {
        fetchData();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [cryptocurrencyPair, pairUrlParams]);

  const columns: GridColDef[] = [
    {
      field: 'price',
      headerName: `Price ${second ? `(${second})` : ''}`,
      width: 130,
      editable: false,
      renderCell: ({ value, row }) => {
        return <span className={row?.isBuyerMaker ? 'link-success' : 'link-danger'}>{value}</span>
      }
    },
    {
      field: 'amount',
      headerName: `Amount  ${first && second ? `(${first})` : ''}`,
      width: 150,
      editable: false,
    },
    {
      field: 'time',
      headerName: 'Time',
      editable: false,
    },
    {
      field: 'isBuyerMaker',
      headerName: 'Buy/Sell',
      width: 80,
      renderCell: ({ value }) => {
        return (
          <span className={value ? 'link-success' : 'link-danger'}>
            {value ? 'Buy' : 'Sell'}
          </span>)
      },
      editable: false,
    }
  ];

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5
          },
        },
      }}
      pageSizeOptions={[5, 10, 25]}
      disableRowSelectionOnClick
    />
  );
};

export default MarketTrades;
