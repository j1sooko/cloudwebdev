const Sequelize = require("sequelize");
class Book extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                // 테이블의 컬럼 정의
                no: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    unique: true
                },
                title: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
                student_no: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                }
            }, 
            {   // 테이블 설정
                sequelize,
                timestamps: true, // true 이면 createdAt, updatedAt 컬럼 자동 추가
                underscored: true, // 테이블명과 컬럼명을 camelCase, snake_case 선택
                modelName: 'Book', // 모델이름
                tableName: 'book', // 테이블이름
                paranoid: true, // true이면 deletedAt컬럼이 자동으로 생성되고 삭제시 삭제하지 않음
                charset: 'utf8', // 인코딩
                collate: 'utf8_general_ci', // 정렬시 비교기준
            }
        )
    }

    static associate(db) {
        // 테이블 간 관계를 정의
        db.Book.belongsToMany(db.Student, { through: 'rentals' });
    }
}

module.exports = Book;