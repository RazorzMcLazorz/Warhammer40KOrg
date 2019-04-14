import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Nav from './add-ons/navBar'
import Footer from './add-ons/footer'
import { unitValues, unitNames } from './add-ons/unitValues'
import { weaponValues } from './add-ons/weaponValues'
import { natesUnitsNames, natesUnits } from './add-ons/adMech'
import { abil } from './add-ons/ability'

class Army extends Component {
  state = {
    round: 0
  }


  Timer () {
    this.setState({ round: this.state.round + 1});
    this.state.round === 100 ?
    this.setState({ round: 'Game Over' }):
    ''
  }

  unit(unitName, name) {
    return (
      <div className='unit'>
        <div className='unitName'>
          {name} - {unitName}
        </div>
        <div className='unitValues'>
          <div className='points'>
            Points = {unitValues[unitName]['points']} 
          </div>
          <div className='M val'>
            M = {unitValues[unitName]['M']}
          </div>
          <div className='WS val'>
            WS = {unitValues[unitName]['WS']}
          </div>
          <div className='BS val'>
            BS = {unitValues[unitName]['BS']}
          </div>
          <div className='S val'>
            S = {unitValues[unitName]['S']}
          </div>
          <div className='T val'>
            T = {unitValues[unitName]['T']}
          </div>
          <div className='W val'>
            W = {unitValues[unitName]['W']}
          </div>
          <div className='A val'>
            A = {unitValues[unitName]['A']}
          </div>
          <div className='LD val'>
            LD = {unitValues[unitName]['LD']}
          </div>
          <div className='SV val'>
            SV = {unitValues[unitName]['SV']}
          </div>
        </div>
      </div>)
  }

  weapon(weaponName) {
    if (weaponName == '') {}
    else {
    return (
      <div className='weapon'>
        <div>{weaponName}</div>
        <div className='weaponPoints'>
          Points: {weaponValues[weaponName].points}
        </div>
        <div className='weaponRange'>
          Range: {weaponValues[weaponName].Range}
        </div>
        <div className='waeponType'>
          Type: {weaponValues[weaponName].Type}
        </div>
        <div className='S'>
          S: {weaponValues[weaponName].S}
        </div>
        <div className='AP'>
          AP: {weaponValues[weaponName].AP}
        </div>
        <div className='D'>
          D: {weaponValues[weaponName].D}
        </div>
        <div>
          Ability: {weaponValues[weaponName].Abilities}
        </div>
      </div>
    )}
  }

  abilities(ability) {
    if (ability == '') {}
    else {
    return (
      <div className='ability'>
        {ability}: {abil[ability]}
      </div>
    )}
  }

  render() {
    return (
      <div id='army'>
        <Nav/>
        <div onClick={() => this.Timer()}>
          {this.state.round}
        </div>
        <div className='body'>
          {
            natesUnitsNames.map((unitName, pos) => 
            <div key={unitName + pos} className='units'>
              <div>
                {this.unit(natesUnits[unitName].unit, unitName)}
              </div>
              <div>
                {this.weapon(natesUnits[unitName].weapon1)}
              </div>
              <div>
                {this.weapon(natesUnits[unitName].weapon2)}
              </div>
              <div>
                {this.weapon(natesUnits[unitName].weapon3)}
              </div>
              <div>
                {this.weapon(natesUnits[unitName].weapon4)}
              </div>
              <div>
                {this.weapon(natesUnits[unitName].weapon5)}
              </div>
              <div>
                {this.weapon(natesUnits[unitName].weapon6)}
              </div>
              <div className='abilit'>
                <div className='abilitiesSect'>
                  <div>
                    {this.abilities(natesUnits[unitName].abilty1)}
                  </div>
                  <div>
                    {this.abilities(natesUnits[unitName].abilty2)}
                  </div>
                  <div>
                    {this.abilities(natesUnits[unitName].abilty3)}
                  </div>
                </div>
                <div>
                  <div className='abilitiesSect'>
                    {this.abilities(natesUnits[unitName].abilty4)}
                  </div>
                  <div>
                    {this.abilities(natesUnits[unitName].abilty5)}
                  </div>
                  <div>
                    {this.abilities(natesUnits[unitName].abilty6)}
                  </div>
                </div>
              </div>
            </div>
            )
          }
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

Army = connect(mapStateToProps, actions)(Army);

export default Army;