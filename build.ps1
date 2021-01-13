function SetupDependency()
{
    $pwd = $PSScriptRoot
    if ($args[1] -eq "--remove-services"){
        if((Test-Path $pwd\packages\@alicloud\services)){
            Remove-Item -Path "$pwd\packages\@alicloud\services" -Recurse 
        }
    }
    if((Test-Path $pwd\packages\@alicloud\test)){
        Remove-Item -Path "$pwd\packages\@alicloud\test" -Recurse 
    }
    lerna bootstrap
    npm install
}
function ClearDependency()
{
    lerna clean
}
function Build()
{
    lerna run build
}
function GenerateTsConfig()
{
    npm i -g jsii
    $pwd = $PSScriptRoot
    $tempdir="$pwd\temp"
    if((Test-Path $tempdir)){
        Remove-Item -Path "$tempdir" -Recurse 
    }
    New-Item -Path "$tempdir" -Force -type directory
    Write-Output "Collecting package list..."
    node scripts\list-packages $tempdir\jsii.txt $tempdir\nonjsii.txt
    foreach($line in Get-Content $tempdir\jsii.txt) {
        Write-Output "run command ->$line"
        cd $line
        jsii
    }
    cd $pwd
    Remove-Item -Path "$tempdir" -Recurse 
}
function Spec2ts()
{
    $pwd = $PSScriptRoot
    $services_dir = "$pwd\packages\@alicloud\services"
    if((Test-Path $services_dir)){
        Remove-Item -Path "$services_dir" -Recurse  
    }
    New-Item -Path "$services_dir" -Force -type directory
    $code_gen_dir="$pwd\packages\ros-cdk-codegen"
    cd $code_gen_dir
    Remove-Item -Path .\generatedPackages -Recurse 
    if ($args[1] -eq "--generate-spec"){
        npm run genspec
    }
    npm run spec2ts
    cd $pwd
}
function JsiiPack()
{
    npm i -g jsii-pacmak
    $pwd = $PSScriptRoot
    $tempdir="$pwd\temp"
    $distdir="$pwd\dist"
    $js_dir="$distdir\js"
    $jsii_dir="$distdir\jsii"
    if((Test-Path $tempdir)){
        Remove-Item -Path "$tempdir" -Recurse  
    }
    New-Item -Path "$tempdir" -Force -type directory
    if((Test-Path $distdir)){
        Remove-Item -Path "$distdir" -Recurse  
    }
    New-Item -Path "$distdir" -Force -type directory
    if((Test-Path $js_dir)){
        Remove-Item -Path "$js_dir" -Recurse  
    }
    if((Test-Path $jsii_dir)){
        Remove-Item -Path "$jsii_dir" -Recurse  
    }  
    Write-Output "Collecting package list..."
    node scripts\list-packages $tempdir\jsii.txt $tempdir\nonjsii.txt
    Write-Output "Packaging jsii modules"
    foreach($line in Get-Content $tempdir\jsii.txt) {
        jsii-pacmak --verbose $line
    }
    cd "$pwd\packages" 
    foreach($file in get-childitem -Recurse -Include "dist"  -ErrorAction Ignore| select-string -NotMatch "node_modules") {
        copy-item -ErrorAction Ignore -r $file\ $pwd\
    }
    move-item -path "$js_dir" "$jsii_dir"
    cd $pwd
}
function CopyJs()
{
    $pwd = $PSScriptRoot
    $dist_dir="$pwd\dist"
    if((Test-Path !$dist_dir)){
        exit
    }
    $js_dir="$dist_dir\js"
    if((Test-Path $js_dir)){
        Remove-Item -Path "$js_dir" -Recurse -ErrorAction Ignore
    }
    New-Item -Path "$js_dir" -Force -type directory
    cd "$pwd\packages"
    get-childitem -Recurse -Include "*.tgz" -ErrorAction Ignore |Remove-Item -Force
    get-childitem -Recurse -Include ".jsii"| Remove-Item -Force
    cd $pwd
    lerna clean
    lerna run pack
    cd "$pwd\packages"
    get-childitem -Recurse -Include "*.tgz" -ErrorAction Ignore |select-string -NotMatch "dist" | copy-item -Destination $js_dir
}

switch($args[0])  
{  
    setup-dependency{SetupDependency}  
    clear-dependency{ClearDependency}  
    generate-tsconfig{GenerateTsConfig}  
    build{Build}  
    spec2ts{Spec2ts}  
    jsii-pack{JsiiPack}  
    copy-js{CopyJs}  
}

