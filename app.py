from cProfile import run
from flask import Flask, render_template, redirect

app= Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


if __name__=='__main__':
    app.run(debug=True) #debug=True faz com que você entre em modo de desenvolvedor, toda vez que der F5 na pág ela atualizará

