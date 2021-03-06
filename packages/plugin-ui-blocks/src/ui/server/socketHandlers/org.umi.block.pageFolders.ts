import { IHandlerOpts } from '../index';

export default function({ blockService, success }: IHandlerOpts) {
  success({
    data: blockService.getFolderTreeData(),
    success: true,
  });
}
