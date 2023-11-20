#!/bin/bash
# usage: ./init-doc-cdk.sh [product name] [document name] ([language] ...)
# for example: ./init-doc-cdk.sh ros usage-examples python java javascript typescript csharp

cd documents
product=$1
product_existed=true
document=$2
document_existed=true
shift 2

product_content="#### $product"
last_row_content="\|----"
document_content="(./documents/$product/$document/)"
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

if [ ! -d ".metadaya.yml" ]; then
    echo "ChinaDocument: https://aliyun.com/xxxx" > .metadaya.yml
    echo "IntlDocument: https://alibabacloud.com/xxxx" >> .metadaya.yml
    echo "DocutmentId: xxx" >> .metadaya.yml
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
                new_language="/[$1](./documents/$product/$document/$1/)"
            else
                new_language="[$1](./documents/$product/$document/$1/)"
            fi
            first_language=false
        else
            new_language="$new_language""/[$1](./documents/$product/$document/$1/)"
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
            title1="### Documents"
            title2="|Document           |Language Projects    |"
        else
            title1="### 文档" 
            title2="|文档               |语言示例               |"
        fi
        while IFS= read -r line; do
            echo "$line" >> "$tmp_file"
            if [[ $line =~ $title1 ]]; then
                echo "" >> "$tmp_file"
                echo "$product_content" >> "$tmp_file"
                echo "" >> "$tmp_file"
                echo "$title2" >> "$tmp_file"
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
