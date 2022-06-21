package com.khoapham.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "location")
@JsonIgnoreProperties({"busStartList", "busArriveList"})
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @OneToMany(mappedBy = "startLocation")
    private Set<Bus> busStartList;

    @OneToMany(mappedBy = "arriveLocation")
    private Set<Bus> busArriveList;

    public Location() {

    }

    public Location(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Bus> getBusStartList() {
        return busStartList;
    }

    public void setBusStartList(Set<Bus> busStartList) {
        this.busStartList = busStartList;
    }

    public Set<Bus> getBusArriveList() {
        return busArriveList;
    }

    public void setBusArriveList(Set<Bus> busArriveList) {
        this.busArriveList = busArriveList;
    }
}
