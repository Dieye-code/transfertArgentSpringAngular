package sn.samaneCorporation.transfertArgent.entities;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "transfert")
public class Transfert implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int montant;
	@Column(length = 10)
	private String date;
	@ManyToOne(cascade = CascadeType.PERSIST)
	private Emetteur emetteur = new Emetteur();
	@ManyToOne(cascade = CascadeType.PERSIST)
	private Recepteur recepteur = new Recepteur();
	/**
	 * 
	 */
	public Transfert() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getMontant() {
		return montant;
	}
	public void setMontant(int montant) {
		this.montant = montant;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public Emetteur getEmetteur() {
		return emetteur;
	}
	public void setEmetteur(Emetteur emetteur) {
		this.emetteur = emetteur;
	}
	public Recepteur getRecepteur() {
		return recepteur;
	}
	public void setRecepteur(Recepteur recepteur) {
		this.recepteur = recepteur;
	}
	
	

}
