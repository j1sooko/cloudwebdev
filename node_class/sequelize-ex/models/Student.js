const Sequelize = require("sequelize");
class Student extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                // 테이블의 컬럼 정의
                no: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    unique: true
                },
                name: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
                major: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
                grade: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                gender: {
                    type: Sequelize.CHAR(1),
                    allowNull: false
                }
            }, 
            {   // 테이블 설정
                sequelize,
                timestamps: true, // true 이면 createdAt, updatedAt 컬럼 자동 추가
                underscored: true, // 테이블명과 컬럼명을 camelCase, snake_case 선택
                modelName: 'Student', // 모델이름
                tableName: 'student', // 테이블이름
                paranoid: true, // true이면 deletedAt컬럼이 자동으로 생성되고 삭제시 삭제하지 않음
                charset: 'utf8', // 인코딩
                collate: 'utf8_general_ci', // 정렬시 비교기준
            }
        )
    }

    static associate(db) {
        // 테이블 간 관계를 정의
        db.Student.hasOne(db.Car, { foreignKey: 'student_no', sourceKey: 'no' });
        db.Book.belongsToMany(db.Student, {through: 'rentals'});
    }
}

module.exports = Student;