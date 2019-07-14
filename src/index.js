import dva from 'dva';
//全局样式
import './index.css';
//antd
import 'antd/dist/antd.css'
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/login').default);
app.model(require('./models/addtext').default);
app.model(require('./models/uesr').default);
// app.model(require('./models/exam').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
