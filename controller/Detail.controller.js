sap.ui.define(["test/controller/BaseController","sap/ui/model/json/JSONModel","sap/ui/core/routing/History"],function(e,t,i){"use strict";return e.extend("test.controller.Detail",{onInit:function(){this.getOwnerComponent().getRouter().getRoute("Detail").attachPatternMatched(this.onPatternMatched,this);this.setContentDensity()},onPatternMatched:function(e){let i=e.getParameters().arguments.id;this.getView().bindElement("/insurances/"+i);this.getView().setModel(new t({firstName:null,lastName:null,phone:null,email:null,title:null,comment:null}),"contact")},onPressed:function(){let e=this.getView().getModel("contact").getData();let i=true;if(!e.firstName){this.getView().byId("inpFirstname").setValueState("Error");this.getView().byId("inpFirstname").setValueStateText("Vorname bitte befüllen!");i=false}else{this.getView().byId("inpFirstname").setValueState("None")}if(!e.lastName){this.getView().byId("inpLastname").setValueState("Error");this.getView().byId("inpLastname").setValueStateText("Nachname bitte befüllen!");i=false}else{this.getView().byId("inpLastname").setValueState("None")}if(!e.email){this.getView().byId("inpEmail").setValueState("Error");this.getView().byId("inpEmail").setValueStateText("Mailadresse bitte befüllen!");i=false}else{this.getView().byId("inpEmail").setValueState("None")}if(!e.title){this.getView().byId("inpTitle").setValueState("Error");this.getView().byId("inpTitle").setValueStateText("Titel bitte befüllen!");i=false}else{this.getView().byId("inpTitle").setValueState("None")}if(!e.comment){this.getView().byId("inpComment").setValueState("Error");this.getView().byId("inpComment").setValueStateText("Nachricht bitte befüllen!");i=false}else{this.getView().byId("inpComment").setValueState("None")}if(i){sap.m.MessageBox.success("Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden!",{title:"Kontaktformular erfolgreich abgesendet!"});this.getView().setModel(new t({firstName:null,lastName:null,phone:null,email:null,title:null,comment:null}),"contact")}else{sap.m.MessageToast.show("Bitte alle Pflichtfelder befüllen!")}}})});