import { TestBed, inject } from '@angular/core/testing';

import { CfFeatureFlagsListConfigService } from './cf-feature-flags-list-config.service';
import { getBaseTestModules } from '../../../../../test-framework/cloud-foundry-endpoint-service.helper';
import { BaseCF } from '../../../../../features/cloud-foundry/cf-page.types';

describe('CfFeatureFlagsListConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CfFeatureFlagsListConfigService, BaseCF],
      imports: [...getBaseTestModules]
    });
  });

  it('should be created', inject([CfFeatureFlagsListConfigService], (service: CfFeatureFlagsListConfigService) => {
    expect(service).toBeTruthy();
  }));
});