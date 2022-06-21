package com.khoapham.model;

import javax.persistence.*;

@Entity
@Table(name = "bus")
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String busType;
    private String owner;
    @ManyToOne
    @JoinColumn(name = "start_location", referencedColumnName = "id")
    private Location startLocation;
    @ManyToOne
    @JoinColumn(name = "arrive_location", referencedColumnName = "id")
    private Location arriveLocation;
    private String phone;
    private String email;
    @Column(columnDefinition = "TIME")
    private String timeStart;
    @Column(columnDefinition = "TIME")
    private String timeArrive;
    private Boolean status;

    public Bus() {

    }

    public Bus(Integer id, String busType, String owner, Location startLocation, Location arriveLocation, String phone, String email, String timeStart, String timeArrive, Boolean status) {
        this.id = id;
        this.busType = busType;
        this.owner = owner;
        this.startLocation = startLocation;
        this.arriveLocation = arriveLocation;
        this.phone = phone;
        this.email = email;
        this.timeStart = timeStart;
        this.timeArrive = timeArrive;
        this.status = status;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBusType() {
        return busType;
    }

    public void setBusType(String busType) {
        this.busType = busType;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public Location getStartLocation() {
        return startLocation;
    }

    public void setStartLocation(Location startLocation) {
        this.startLocation = startLocation;
    }

    public Location getArriveLocation() {
        return arriveLocation;
    }

    public void setArriveLocation(Location arriveLocation) {
        this.arriveLocation = arriveLocation;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(String timeStart) {
        this.timeStart = timeStart;
    }

    public String getTimeArrive() {
        return timeArrive;
    }

    public void setTimeArrive(String timeArrive) {
        this.timeArrive = timeArrive;
    }
}
