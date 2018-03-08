import { Store } from '@ngrx/store';

import { getRowUniqueId } from '../../../../../features/cloud-foundry/cf.helpers';
import { getPaginationKey } from '../../../../../store/actions/pagination.actions';
import { GetAllSecurityGroups } from '../../../../../store/actions/security-groups-actions';
import { AppState } from '../../../../../store/app-state';
import { APIResource } from '../../../../../store/types/api.types';
import { ListDataSource } from '../../data-sources-controllers/list-data-source';
import { IListConfig } from '../../list.component.types';
import { entityFactory, securityGroupSchemaKey } from '../../../../../store/helpers/entity-factory';

export class CfSecurityGroupsDataSource extends ListDataSource<APIResource> {
  constructor(store: Store<AppState>, cfGuid: string, listConfig?: IListConfig<APIResource>) {
    const paginationKey = getPaginationKey('security-groups', cfGuid);
    const action = new GetAllSecurityGroups(cfGuid, paginationKey);
    super({
      store,
      action,
      schema: entityFactory(securityGroupSchemaKey),
      getRowUniqueId: getRowUniqueId,
      paginationKey,
      isLocal: true,
      transformEntities: [],
      listConfig
    });
  }
}