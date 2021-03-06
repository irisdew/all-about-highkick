"""empty message

Revision ID: 328398b9e749
Revises: 52eb71faea77
Create Date: 2021-04-15 22:18:39.503568

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '328398b9e749'
down_revision = '52eb71faea77'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('survey_result',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('image', sa.Text(), nullable=False),
    sa.Column('nick_name', sa.String(length=100), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('pair', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('survey_result')
    # ### end Alembic commands ###
