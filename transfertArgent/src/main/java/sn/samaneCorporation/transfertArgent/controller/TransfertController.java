package sn.samaneCorporation.transfertArgent.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import sn.samaneCorporation.transfertArgent.entities.Transfert;
import sn.samaneCorporation.transfertArgent.repository.TransfertRepository;

@RestController
@CrossOrigin("*")
public class TransfertController {
	
	
	@Autowired
	private TransfertRepository transfertDb;
	
	
	@RequestMapping(value = "/Transfert", method = RequestMethod.GET)
	private List<Transfert> listeTransfert(){
		return this.transfertDb.findAll();
	}
	
	@RequestMapping(value = "/Transfert/add", method = RequestMethod.POST)
	private Transfert addTransfert(@RequestBody Transfert transfert){
		return this.transfertDb.save(transfert);
	}
	

}
