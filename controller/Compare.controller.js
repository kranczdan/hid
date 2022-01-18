sap.ui.define(["test/controller/BaseController","sap/ui/model/json/JSONModel","sap/ui/core/routing/History"],function(e,t,n){"use strict";return e.extend("test.controller.Compare",{onInit:function(){this.getOwnerComponent().getRouter().getRoute("Compare").attachPatternMatched(this.onPatternMatched,this);this.setContentDensity()},onPatternMatched:function(e){let t=e.getParameters().arguments.ids;let n=t.split(";");let a=[];n.forEach(e=>{a.push(this.getModel().getProperty("/insurances/"+e))});let s=this.getView().byId("idTable");s.removeAllColumns();s.removeAllItems();s.addColumn(new sap.m.Column);a.forEach(e=>{s.addColumn(new sap.m.Column({hAlign:"Center",header:new sap.m.Label({text:e.title,design:"Bold"})}))});let o=[new sap.m.Label({text:"Eigenschaften",design:"Bold"})];a.forEach(e=>{let t=[];e.features.forEach(e=>{t.push(new sap.m.Text({text:"⦁ "+e.text}))});o.push(new sap.m.VBox({items:t}))});s.addItem(new sap.m.ColumnListItem({cells:o}));o=[new sap.m.Label({text:"Typ",design:"Bold"})];a.forEach(e=>{o.push(new sap.m.Text({text:""+e.type}))});s.addItem(new sap.m.ColumnListItem({cells:o}));o=[new sap.m.Label({text:"Preis",design:"Bold"})];a.forEach(e=>{o.push(new sap.m.ObjectNumber({number:""+e.pricePerMonth,unit:"€ / Monat"}))});s.addItem(new sap.m.ColumnListItem({cells:o}));o=[new sap.m.Label({text:""})];a.forEach(e=>{let t=new sap.m.Button({text:"Details"});t.addCustomData(new sap.ui.core.CustomData({key:"id",value:e.id}));t.attachPress(this.onNavToDetail.bind(this));o.push(t)});s.addItem(new sap.m.ColumnListItem({cells:o}))},onNavToDetail:function(e){this.getOwnerComponent().getRouter().navTo("Detail",{id:e.getSource().getCustomData()[0].getValue()})}})});