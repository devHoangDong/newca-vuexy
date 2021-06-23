import Affiliate from './content/affiliate/showAffiliate';
import EditAccount from './content/EditAccount.jsx';
import EditPassword from './content/EditPassword';
import PurchaseOrder from './content/PurchaseOrder';
import DrawalMoney from './content/affiliate/DrawalMoney';
import AddToken from './content/AddToken';
import ListToken from './content/ListToken';
import Home from '../home/index';
const routerAccount = [
  {path: '/account/affiliate', exact: true, Component: Affiliate},
  {path: '/account/editAccount', exact: true, Component: EditAccount},
  {path: '/account/editPassword', exact: true, Component: EditPassword},
  {path: '/account/purchaseOder', exact: true, Component: PurchaseOrder},
  {path: '/account/listToken', exact: true, Component: ListToken},
  {path: '/account/addToken', exact: true, Component: AddToken},
  {path: '/account', exact: true, Component: DrawalMoney},
  {path: '/', exact: true, Component: Home},
]
export default routerAccount
