const Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    recurrence_type: {
      type: DataTypes.STRING,  // daily, weekly, etc.
      allowNull: true,
    },
    recurrence_interval: {
      type: DataTypes.INTEGER,  // e.g., 1, 2, 3...
      allowNull: true,
    },
  });
  