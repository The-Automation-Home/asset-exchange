/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getFactory emit */

/**
 * Create a new property
 * @param {org.property.registration.createProperty} tx
 * @transaction
 */

async function createProperty(tx){
	//console.log('Property Creation Transaction');
	const factory = getFactory();
	const me = getCurrentParticipant();
	
	//Add new property
	const property = factory.newResource('org.property.registration', 'Property', tx.PID);
	property.marketPrice = tx.marketPrice;
	property.registrationDate = tx.registrationDate;
	property.propertyType = tx.propertyType;
	property.location = tx.location;
	property.owner = me;
	
	// save the property
	const registry = await getAssetRegistry(property.getFullyQualifiedType());
    const exists = await registry.get(tx.PID).catch(err => { 
      console.log('Property not found');
    });
    if (exists){
      throw new Error('Property with this ID already exists');
    } else {
	  await registry.add(property); 
    }
}

