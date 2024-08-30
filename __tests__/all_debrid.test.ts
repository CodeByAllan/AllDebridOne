import { AllDebrid } from '../src/main';
import { HttpService } from '../src/services/http_service';
import constants from '../src/utils/constants';
import PinResponse from './resources/pin.response.json';
import ErrorResponse from './resources/error.response.json';

// Mockando a classe HttpService
jest.mock('../src/services/http_service', () => {
  return {
    HttpService: jest.fn().mockImplementation(() => ({
      get: jest.fn() // Mockando o método get
    }))
  };
});

const mockedHttp = new HttpService(
  constants.URL_BASE.ALL_DEBRID
) as jest.Mocked<HttpService>;

const allDebrid = new AllDebrid(mockedHttp);
describe('AllDebrid', () => {
  test('pin sucess', async () => {
    mockedHttp.get.mockResolvedValue(PinResponse);
    await allDebrid.pin('test');
    expect(mockedHttp.get).toHaveBeenCalled();
  });
  test('pin error', async () => {
    mockedHttp.get.mockResolvedValue(ErrorResponse);
    await allDebrid.pin('');
    expect(mockedHttp.get).toHaveBeenCalled();
  });
  test('pin failure', async () => {
    const errorMessage = 'API unavailable';
    mockedHttp.get.mockRejectedValue(new Error(errorMessage));
    await expect(allDebrid.pin('test')).rejects.toThrow(errorMessage);
    expect(mockedHttp.get).toHaveBeenCalled();
  });
});
