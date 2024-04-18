import { Test, TestingModule } from '@nestjs/testing';
import { ArtisteController } from './artiste.controller';

describe('ArtisteController', () => {
  let controller: ArtisteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtisteController],
    }).compile();

    controller = module.get<ArtisteController>(ArtisteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
