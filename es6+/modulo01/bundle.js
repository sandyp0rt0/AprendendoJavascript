"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log("Exercicio 01");

var User = /*#__PURE__*/function () {
  function User(email, senha) {
    _classCallCheck(this, User);

    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  _createClass(User, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin;
    }
  }]);

  return User;
}();

var Admin = /*#__PURE__*/function (_User) {
  _inherits(Admin, _User);

  var _super = _createSuper(Admin);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this, email, senha);
    _this.admin = true;
    return _this;
  }

  return Admin;
}(User);

var user1 = new User("email@teste.com", "senha123");
var adm1 = new Admin("email@teste.com", "senha123");
console.log(user1.isAdmin());
console.log(adm1.isAdmin());
console.log("Exercicio 02");
var usuarios = [{
  nome: "diego",
  idade: 23,
  empresa: "rocketseat"
}, {
  nome: "gabriel",
  idade: 15,
  empresa: "rocketseat"
}, {
  nome: "lucas",
  idade: 30,
  empresa: "facebook"
}];
var idades = usuarios.map(function (item) {
  return item.idade;
});
console.log(idades);
var filtro = usuarios.filter(function (item) {
  return item.idade > 18 && item.empresa === "rocketseat";
});
console.log(filtro);
var google = usuarios.find(function (item) {
  return item.empresa === "google";
});
console.log(google);
var unindoOps = usuarios.map(function (item) {
  item.idade *= 2;
  return item;
}).filter(function (item) {
  return item.idade <= 50;
});
console.log(unindoOps);
console.log("Exercicio 03");
console.log("3.1");
var arr = [1, 2, 3, 4, 5];
console.log(arr.map(function (item) {
  return item += 10;
}));
console.log("3.2");
var usuario = {
  nome: "Diego",
  idade: 23
};

var mostraIdade = function mostraIdade(u) {
  return u.idade;
};

console.log(mostraIdade(usuario));
console.log("3.3");
var nome = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Diego";
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
console.log("3.4");

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve("oi");
  });
};

promise().then(function (response) {
  return console.log(response);
});
console.log("Exercicio 04");
console.log("4.1");
var empresa = {
  nome2: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};
var nome2 = empresa.nome2,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome2);
console.log(cidade);
console.log(estado);
console.log("4.2");

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: "Diego",
  idade: 23
}));
console.log("Exercicio 05");
console.log("5.1");
var arr2 = [1, 2, 3, 4, 5, 6];
var x = arr2[0],
    y = arr2.slice(1);
console.log(x, y);

function soma(a, b) {
  for (var _len = arguments.length, c = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    c[_key - 2] = arguments[_key];
  }

  if (c.length <= 0) {
    return a + b;
  } else {
    return a + b + c.reduce(function (total, next) {
      return total + next;
    });
  }
}

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));
console.log("5.2");
var usuario2 = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

var usuario3 = _objectSpread(_objectSpread({}, usuario2), {}, {
  nome: "Gabriel"
});

console.log(usuario3);

var usuario4 = _objectSpread(_objectSpread({}, usuario2), {}, {
  endereco: _objectSpread(_objectSpread({}, usuario3.endereco), {}, {
    cidade: "Lontras"
  })
});

console.log(usuario4);
console.log("Exercicio 06");
var usuario5 = "Diego";
var idade2 = 23;
console.log("O usu\xE1rio ".concat(usuario5, " possui ").concat(idade, " anos."));
console.log("Exercicio 07");
var nome3 = "Diego";
var idade3 = 23;
var usuario6 = {
  nome3: nome3,
  idade3: idade3,
  cidade: "Rio do Sul"
};
console.log(usuario6);
