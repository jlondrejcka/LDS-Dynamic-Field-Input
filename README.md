# SFDX  App
Simple Lightning Component framework, using Design Attributes and Lightning Data Services, to so admins can use the same Lightning Component across multiple objects. 

## Dev, Build and Test

Using Salesforce DX
```
git clone https://github.com/jlondrejcka/LDS-Dynamic-Field-Input
cd LDS-Dynamic-Field-Input
sfdx force:org:create -f config/project-scratch-def.json --setalias dynamicInputField --setdefaultusername
sfdx force:source:push
sfdx force:org:open

```

Add the component to any Lightning Record Page. 

Add the API field name in component properties. 
 
## Resources
Blog Post: https://medium.com/p/4a988892367d
Narrated Plog Post: 



