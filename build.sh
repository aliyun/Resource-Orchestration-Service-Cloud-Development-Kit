#!/bin/bash
# Runs "npm package" in all modules. This will produce a "dist/" directory in each module.
# Then, calls pack-collect.sh to merge all outputs into a root ./pack directory, which is
# later read by bundle-beta.sh.
set -e

PROG_NAME=$0
ACTION=$1
ARG1=$2

usage() {
    echo "Usage: $PROG_NAME {setup-dependency|clear-dependency|generate-tsconfig|build|spec2ts|jsii-pack|copy-js}"
    exit 1;
}


setup_dependency() {
    root=$PWD
    case "$ARG1" in
      --remove-services)
          rm -rf "$root/packages/@ros-cdk/services"
          rm -rf "$root/packages/@ros-cdk/test"
      ;;
    esac

    lerna bootstrap
    npm install
}


clear_dependency() {
    lerna clean
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
    done

    cd $root
    rm -fr ${TMPDIR}
}


build() {
    lerna run build
}


spec2ts() {
    root=$PWD

    SERVICES_DIR="$root/packages/@ros-cdk/services"
    if [ ! -d "$SERVICES_DIR" ]; then
        mkdir "$SERVICES_DIR"
    fi

    CODE_GEN_DIR="$root/packages/ros-cdk-codegen"
    cd $CODE_GEN_DIR

    npm run spec2ts

    cd $root
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
    $PACMAK \
      --verbose \
      $(cat $TMPDIR/jsii.txt)

    for dir in $(find packages -name dist | grep -v node_modules | grep -v run-wrappers); do
      echo "Merging ${dir}" >&2
      cp -r $dir/ ${root}/
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

    lerna run pack

    for f in $(find packages -name "*.tgz" | grep -v dist); do
      echo "Merging $f" >&2
      cp -r $f "$js_dir/"
    done
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
    jsii-pack)
        jsii_pack
    ;;
    copy-js)
        copy_js
    ;;
    *)
        usage
    ;;
esac
