import { Test, TestingModule } from '@nestjs/testing';
import { MusiqueController } from './musique.controller';

describe('MusiqueController', () => {
  let controller: MusiqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusiqueController],
    }).compile();

    controller = module.get<MusiqueController>(MusiqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
