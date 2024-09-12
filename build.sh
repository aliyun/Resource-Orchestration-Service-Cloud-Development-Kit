#!/bin/bash
# Runs "npm package" in all modules. This will produce a "dist/" directory in each module.
# Then, calls pack-collect.sh to merge all outputs into a root ./pack directory, which is
# later read by bundle-beta.sh.
set -e

PROG_NAME=$0
ACTION=$1
ARG1=$2

python3 -V

usage() {
    echo "Usage: $PROG_NAME {setup-dependency|clear-dependency|generate-tsconfig|build|generate-webs|spec2ts|jsii-pack|copy-js|convert-maven-project}"
    exit 1;
}


setup_dependency() {
    root=$PWD
    case "$ARG1" in
      --remove-services)
          rm -rf "$root/packages/@alicloud/services"
      ;;
    esac

    lerna link
    lerna bootstrap
    npm install
}


clear_dependency() {
    lerna clean -y
    find . -name "package-lock.json" -type f -exec rm -f {} \;
}


generate_tsconfig() {
    export PATH=$PWD/node_modules/.bin:$PATH
    export NODE_OPTIONS="--max-old-space-size=4096 ${NODE_OPTIONS:-}"

    root=$PWD

    PACMAK=${PACMAK:-jsii-pacmak}
    JSII=${JSII:-jsii}

    TMPDIR="$PWD/temp"
    rm -fr ${TMPDIR}
    mkdir -p ${TMPDIR}

    # Split out jsii and non-jsii packages. Jsii packages will be built all at once.
    # Non-jsii packages will be run individually.
    echo "Collecting package list..." >&2
    node scripts/list-packages $TMPDIR/jsii.txt $TMPDIR/nonjsii.txt

    # run jsii to create .jsii in every service
    cat $TMPDIR/jsii.txt | while read line
    do
      echo "run command ->" + $line
      cd $line
      $JSII
      python3 ${root}/tools/update_tsconfig.py --folder_path=${line}
    done

    cd $root
    rm -fr ${TMPDIR}
}


build() {
    lerna run build
}


spec2ts() {
    root=$PWD

    SERVICES_DIR="$root/packages/@alicloud/services"
    if [ ! -d "$SERVICES_DIR" ]; then
        mkdir "$SERVICES_DIR"
    fi

    CODE_GEN_DIR="$root/packages/ros-cdk-codegen"
    cd $CODE_GEN_DIR
    rm -rf generatedPackages

    case "$ARG1" in
      --generate-spec)
         npm run genspec
      ;;
    esac
    npm run spec2ts

    cd $root
}

generate_webs() {
    root=$PWD

    TMPDIR="$PWD/temp"
    REFDIR="$PWD/references"
    DOCDIR="$REFDIR/docs"

    rm -fr ${TMPDIR}
    mkdir -p ${TMPDIR}

    rm -fr ${REFDIR}/site
    rm -fr ${DOCDIR}/python
    mkdir -p ${DOCDIR}/python
    rm -fr ${DOCDIR}/java
    mkdir -p ${DOCDIR}/java
    rm -fr ${DOCDIR}/csharp
    mkdir -p ${DOCDIR}/csharp
    rm -fr ${DOCDIR}/typescript
    mkdir -p ${DOCDIR}/typescript
    rm -fr ${DOCDIR}/go
    mkdir -p ${DOCDIR}/go

    # Split out jsii and non-jsii packages. Jsii packages will be built all at once.
    # Non-jsii packages will be run individually.
    echo "Collecting package list..." >&2
    node scripts/list-packages $TMPDIR/jsii.txt $TMPDIR/nonjsii.txt

    cat $TMPDIR/jsii.txt | while read line
    do
      echo "generate docs on ->" + $line
      cd $line
      npx jsii-docgen -o docs/API -l java -l python -l typescript -l csharp -l go
      basename=$(basename "$line")
      python3 ${root}/tools/process_markdown_file.py --file_path=${line}/docs/API.python.md --output_path=${DOCDIR}/python/${basename}/
      python3 ${root}/tools/process_markdown_file.py --file_path=${line}/docs/API.java.md --output_path=${DOCDIR}/java/${basename}/
      python3 ${root}/tools/process_markdown_file.py --file_path=${line}/docs/API.csharp.md --output_path=${DOCDIR}/csharp/${basename}/
      python3 ${root}/tools/process_markdown_file.py --file_path=${line}/docs/API.typescript.md --output_path=${DOCDIR}/typescript/${basename}/
      python3 ${root}/tools/process_markdown_file.py --file_path=${line}/docs/API.go.md --output_path=${DOCDIR}/go/${basename}/
      rm -rf docs/
    done

    cd $root
    rm -fr ${TMPDIR}
    cd $REFDIR
    mkdocs build

    python3 ${root}/tools/remove_html_empty_lines.py --folder_path=${REFDIR}/site
    cd site
    zip -r assets.zip assets/*
    zip -r csharp.zip csharp/*
    zip -r java.zip java/*
    zip -r python.zip python/*
    zip -r typescript.zip typescript/*
    zip -r go.zip go/*
    zip -r search.zip search/*
#    zip -r site.zip site/*
}


convert_maven_project() {
    root=$PWD
    dist_dir="$PWD/dist"
    if [ ! -d "$dist_dir" ]; then
        echo "directory $dist_dir not found"
        exit 1
    fi

    java_dir="$dist_dir/java/com/aliyun"

    java_packages="$dist_dir/java/com/aliyun/packages"
    rm -rf  $java_packages
    mkdir -p $java_packages

    for jar in $(find $java_dir -name "*-sources.jar"); do
      long_package_name=${jar#*aliyun/}
      short_package_name=${long_package_name%%/*}
      mkdir -p ${java_packages}/${short_package_name}/
      cp -r $jar ${java_packages}/${short_package_name}/
      cd ${java_packages}/${short_package_name}/
      jar xvf ${java_packages}/${short_package_name}/*.jar
      mkdir -p ${java_packages}/${short_package_name}/src/main/java
      mv com/ ${java_packages}/${short_package_name}/src/main/java
      cp META-INF/maven/com.aliyun/${short_package_name}/pom.xml ${java_packages}/${short_package_name}/
      rm -rf *.jar META-INF/
      python3 $root/tools/convert_maven_project.py --pom_file_path=${java_packages}/${short_package_name}/pom.xml
    done

    rm -rf $root/multiple-languages/java
    mv ${java_packages}/ $root/multiple-languages/java
}


convert_csharp_project(){
    root=$PWD
    dist_dir="$PWD/dist"
    if [ ! -d "$dist_dir" ]; then
        echo "directory $dist_dir not found"
        exit 1
    fi
    csharp_dir="$dist_dir/dotnet/"
    for dir in $(ls $csharp_dir); do
        echo "${csharp_dir}${dir}"
        package_name=${dir#*dotnet/}
        package_csproj_path="${csharp_dir}${dir}/${package_name}.csproj"
        python3 $root/tools/convert_csharp_project.py --csproj_file_path=${package_csproj_path}
    done
    rm -rf $root/multiple-languages/dotnet
    cp -rp ${csharp_dir}/ $root/multiple-languages/dotnet
}

convert_python_project(){
    root=$PWD
    dist_dir="$PWD/dist"
    if [ ! -d "$dist_dir" ]; then
        echo "directory $dist_dir not found"
        exit 1
    fi
    python_dir="$dist_dir/python/"
    python_packages="$dist_dir/python/packages"
    rm -rf  $python_packages
    mkdir -p $python_packages
    for py_package in $(find ${python_dir} -name "*.tar.gz"); do
        tar zxvf ${py_package} -C ${python_packages}
    done

    rm -rf $root/multiple-languages/python
    mv ${python_packages}/ $root/multiple-languages/python
}

convert_js_project(){
    root=$PWD
    dist_dir="$PWD/dist"
    if [ ! -d "$dist_dir" ]; then
        echo "directory $dist_dir not found"
        exit 1
    fi
    js_dir="$dist_dir/js/"
    js_packages="$dist_dir/js/packages"
    rm -rf  $js_packages
    mkdir -p $js_packages
    for js_package in $(find ${js_dir} -name "*.tgz"); do
        long_package_name=${js_package#*js/}
        short_package_name=${long_package_name%%.tgz*}
        mkdir -p ${js_packages}/${short_package_name} && tar zxvf ${js_package} -C ${js_packages}/${short_package_name}  --strip-components 1
    done

    rm -rf $root/multiple-languages/js
    mv ${js_packages}/ $root/multiple-languages/js
}

convert_go_project(){
    root=$PWD
    dist_dir="$PWD/dist"
    if [ ! -d "$dist_dir" ]; then
        echo "directory $dist_dir not found"
        exit 1
    fi
    go_dir="$dist_dir/go/"
    rm -rf $root/multiple-languages/go
    mv ${go_dir}/ $root/multiple-languages/go
}


generate_package_version() {
  root=$PWD
  python3 $root/tools/generate_package_version.py
}


jsii_pack() {
    export PATH=$PWD/node_modules/.bin:$PATH
    export NODE_OPTIONS="--max-old-space-size=4096 ${NODE_OPTIONS:-}"

    root=$PWD

    PACMAK=${PACMAK:-jsii-pacmak}

    TMPDIR="$PWD/temp"
    rm -fr ${TMPDIR}
    mkdir -p ${TMPDIR}

    distdir="$PWD/dist"
    rm -fr ${distdir}
    mkdir -p ${distdir}

    js_dir="$distdir/js"
    jsii_dir="$distdir/jsii"
    rm -rf ${js_dir}
    rm -rf ${jsii_dir}

    # Split out jsii and non-jsii packages. Jsii packages will be built all at once.
    # Non-jsii packages will be run individually.
    echo "Collecting package list..." >&2
    node scripts/list-packages $TMPDIR/jsii.txt $TMPDIR/nonjsii.txt

    # Jsii packaging (all at once using jsii-pacmak)
    echo "Packaging jsii modules" >&2

    if [ "${ARG1}" == "--source-code" ];
    then
        for pack_dir in $(cat $TMPDIR/jsii.txt); do
           $PACMAK -c true --verbose $pack_dir
        done
    else
        $PACMAK \
          --verbose \
          $(cat $TMPDIR/jsii.txt)
    fi
    for dir in $(find packages -name dist | grep -v node_modules | grep -v run-wrappers); do
      echo "Merging ${dir}" >&2
      cp -r $dir ${root}/
    done

    mv "$js_dir" "$jsii_dir"
    cd $root
    rm -fr ${TMPDIR}

    # for posterity, print all files in dist
    echo "=============================================================================================="
    echo " dist contents"
    echo "=============================================================================================="
    find dist/
}


copy_js() {
    root=$PWD
    dist_dir="$PWD/dist"
    if [ ! -d "$dist_dir" ]; then
        echo "directory $dist_dir not found"
        exit 1
    fi

    js_dir="$dist_dir/js"
    rm -rf "$js_dir"
    mkdir "$js_dir"

    for f in $(find packages -name "*.tgz" | grep -v dist); do
      rm -f $f
    done

    for f in $(find packages -name ".jsii"); do
      rm -f $f
    done

    for f in $(find packages -name "package-lock.json" | grep -v dist); do
      rm -f $f
    done

    lerna clean -y
    lerna run pack

    for f in $(find packages -name "*.tgz" | grep -v dist); do
      echo "Merging $f" >&2
      cp -rf $f "$js_dir/"
    done
}

set_dependency_jsii_packages() {
  root=$PWD
  packages_json_file="$PWD/package.json"
  multiple_languages_dir="$PWD/multiple-languages"

  if [ ! -d "$multiple_languages_dir" ]; then
        echo "directory $multiple_languages_dir not found"
        exit 1
  fi
  dotnet_dir="$multiple_languages_dir/dotnet"
  java_dir="$multiple_languages_dir/java"
  python_dir="$multiple_languages_dir/python"
  go_dir="$multiple_languages_dir/go"

  python3 $root/tools/set_dependency_jsii_packages.py --dotnet_dir_path=${dotnet_dir} --java_dir_path=${java_dir} --python_dir_path=${python_dir} --go_dir_path=${go_dir} --packages_json_file=${packages_json_file}
}


case "$ACTION" in
    setup-dependency)
        setup_dependency
    ;;
    clear-dependency)
        clear_dependency
    ;;
    generate-tsconfig)
        generate_tsconfig
    ;;
    build)
        build
    ;;
    spec2ts)
        spec2ts
    ;;
    generate-webs)
        generate_webs
    ;;
    jsii-pack)
        jsii_pack
    ;;
    copy-js)
        copy_js
    ;;
    convert-maven-project)
          convert_maven_project
    ;;
    convert-csharp-project)
          convert_csharp_project
    ;;
    generate-package-version)
          generate_package_version
    ;;
    convert-python-project)
          convert_python_project
    ;;
    convert-js-project)
          convert_js_project
    ;;
    convert-go-project)
          convert_go_project
    ;;
    set-dependency-jsii-packages)
          set_dependency_jsii_packages
    ;;
    *)
        usage
    ;;
esac
