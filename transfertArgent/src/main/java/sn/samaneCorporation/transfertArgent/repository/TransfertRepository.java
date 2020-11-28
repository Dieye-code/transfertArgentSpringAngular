package sn.samaneCorporation.transfertArgent.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import sn.samaneCorporation.transfertArgent.entities.Transfert;

@CrossOrigin("*")
public interface TransfertRepository extends JpaRepository<Transfert, Integer> {

}
