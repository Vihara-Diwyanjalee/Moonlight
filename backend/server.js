// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./routes/authRoutes');

const router2 = require('./routes/usersRoutes');

const jewlleryRoutes = require("./routes/jewlleryRoutes");

const supListRoute = require('../backend/routes/supListRoute');
const suproute = require('../backend/routes/suproute');

const router3 = require('./routes/ordersRoutes');
const router4 = require('./routes/feedbackRouter');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Add this line to enable CORS

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Routes
app.use('/api', router);
// app.use('/api/send-verification-code', router);
app.use('/api/users', router2);

app.use('/api/user', require('./routes/users'));


app.use("/", jewlleryRoutes);
app.use("/get-images", jewlleryRoutes);
app.use("/upload-image", jewlleryRoutes);
app.use("/delete-image/:id", jewlleryRoutes);
app.use("/update-image/:id", jewlleryRoutes);
app.use("/get-item/:id", jewlleryRoutes);
app.use('/api',suproute);
app.use('/api',supListRoute);

app.use('/api/orders', router3);


app.use('/api',router4);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
