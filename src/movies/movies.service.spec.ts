import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

// 테스트를 설명
describe('MoviesService', () => {
  let service: MoviesService;

  // 테스트 실행 전에 수행
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  // 테스트 실행 부분
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be 4', () => {
    expect(2 + 2).toEqual(4);
  });
});
