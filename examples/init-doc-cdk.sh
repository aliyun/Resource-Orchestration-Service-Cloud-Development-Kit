#!/bin/bash
# usage: ./init-doc-cdk.sh [template category] [product name] [document name] ([language] ...)
# example1: ./init-doc-cdk.sh documents ecs deploy-SVN-by-using-svnserve python java javascript typescript csharp
# example2: ./init-doc-cdk.sh solutions website classic-architecture-on-the-cloud python

if [[ -z "$INIT_CDK_EXAMPLE_REEXECUTED_IN_NEW_BASH" ]]; then
    SCRIPT_PATH="$0"

    if [[ "$OSTYPE" == "darwin"* ]] && [[ -x "/opt/homebrew/bin/bash" ]]; then
        export INIT_CDK_EXAMPLE_REEXECUTED_IN_NEW_BASH=1
        exec "/opt/homebrew/bin/bash" "$SCRIPT_PATH" "$@"
        exit $?
    elif [[ "$OSTYPE" == "darwin"* ]] && [[ -x "/usr/local/bin/bash" ]]; then
        export INIT_CDK_EXAMPLE_REEXECUTED_IN_NEW_BASH=1
        exec "/usr/local/bin/bash" "$SCRIPT_PATH" "$@"
        exit $?
    fi
fi

echo "Running with $(bash --version)"

declare -A categories_zh_mapping
declare -A categories_en_mapping
declare -A solutions_mapping

categories_zh_mapping["documents"]="文档"
categories_en_mapping["documents"]="Documents"
categories_zh_mapping["solutions"]="解决方案"
categories_en_mapping["solutions"]="Solutions"
solutions_mapping["internet-application-development"]="互联网应用开发"
solutions_mapping["website"]="网站搭建"
solutions_mapping["network"]="网络"
solutions_mapping["database"]="数据库"

category=$1
if [[ ! -v categories_en_mapping[${category}] ]]; then
    echo "The category (${category}) of CDK code examples you want to create does not exist."
    exit 1
fi
if [ ! -d $category ]; then
    mkdir $category
fi
cd $category

product=$2
product_existed=true
document=$3
document_existed=true
shift 3

last_row_content="\|----"
document_content="(./$category/$product/$document/)"
new_content="|[Please fill in the document name](Please-fill-in-the-document-URL)|"

if [ ! -d $product ]; then
    product_existed=false
    mkdir $product
fi
cd $product
if [ ! -d $document ]; then
    document_existed=false
    mkdir $document
fi
cd $document

if [ ! -d ".metadata.yml" ]; then
    echo "ChinaDocument: https://aliyun.com/xxxx" > .metadata.yml
    echo "IntlDocument: https://alibabacloud.com/xxxx" >> .metadata.yml
    echo "DocumentId: xxx" >> .metadata.yml
fi

first_language=true
until [ $# -eq 0 ]
do
    if [ ! -d $1 ]; then
        mkdir $1
        mkdir demo
        cd demo
        ros-cdk init --language=$1 --generate-only=true
        cd ..

        mv -f demo/* $1/
        rm -rf demo

        if [ "$first_language" = true ];
        then
            if [ $document_existed = true ]; then
                new_language="/[$1](./$category/$product/$document/$1/)"
            else
                new_language="[$1](./$category/$product/$document/$1/)"
            fi
            first_language=false
        else
            new_language="$new_language""/[$1](./$category/$product/$document/$1/)"
        fi
    fi
    shift 1
done

PWD
tree .
cd ../../..
new_language="$new_language""|"
new_content="$new_content""$new_language"

func(){
    tmp_file="tmp""$1"
    if [ $1 == "README-CN.md" ] && [ -v solutions_mapping[${product}] ]; then
        product_content="#### ${solutions_mapping[$product]}"
    else
        product_content="#### $product"
    fi

    # 标记是否找到目标行
    found=false

    if [ $product_existed = true ] && [ $document_existed = false ];
    then
        while IFS= read -r line; do
            echo "$line" >> "$tmp_file"

            if [[ $line =~ $product_content ]]; then
                found=true
            fi

            if [ "$found" = true ] && [[ $line =~ $last_row_content ]]; then
                echo "$new_content" >> "$tmp_file"

                found=false
            fi
        done < "$1"
    elif [ $product_existed = true ] && [ $document_existed = true ];
    then
        while IFS= read -r line; do
            if [[ $line =~ $product_content ]]; then
                found=true
            fi

            if [ "$found" = true ] && [[ $line =~ $document_content ]]; then
                new_content=${line%?}"$new_language"
                echo "$new_content" >> "$tmp_file"
                found=false
            else
                echo "$line" >> "$tmp_file"
            fi
        done < "$1"
    else
        if [ $1 == "README.md" ]; then
            category_title="### ${categories_en_mapping[$category]}"
            sub_title1="The tables below demonstrate"
            sub_title2="|Document           |Language Projects    |"
        else
            category_title="### ${categories_zh_mapping[$category]}"
            sub_title1="下面的表格展示了" 
            sub_title2="|文档               |语言示例               |"
        fi
        while IFS= read -r line; do
            echo "$line" >> "$tmp_file"
            if [[ $line =~ ${category_title} ]]; then
                found=true
            fi
            if [ "$found" = true ] && [[ $line =~ $sub_title1 ]]; then
                echo "" >> "$tmp_file"
                echo "$product_content" >> "$tmp_file"
                echo "" >> "$tmp_file"
                echo "$sub_title2" >> "$tmp_file"
                echo "|-------------------|---------------------|" >> "$tmp_file"
                echo "$new_content" >> "$tmp_file"
            fi
        done < "$1"
    fi

    # 将临时文件内容复制回原文件
    mv "$tmp_file" "$1"
}

func "README.md"
func "README-CN.md"
