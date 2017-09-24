const Sdopx = require('sdopx').Sdopx;
const helper = require('think-helper');

module.exports = class {
	
  constructor(viewFile, viewData, config) {
	this.opx=new Sdopx();
	this.opx.setTemplateDir(config.viewPath);
    this.viewFile = viewFile;
    this.viewData = viewData;
	this.config=config;
    this.handleOptions = config.options;
  }

  render() {
    if (helper.isFunction(this.config.beforeRender)) {
      this.config.beforeRender(this.opx, this.handleOptions);
    }
	this.opx._book=this.viewData;
	return this.opx.fetch('file:' + this.viewFile);
  }
};
