package com.aliyun.ros.cdk.ots;

/**
 * Properties for defining a `ALIYUN::OTS::SearchIndex`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:25.918Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.SearchIndexProps")
@software.amazon.jsii.Jsii.Proxy(SearchIndexProps.Jsii$Proxy.class)
public interface SearchIndexProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property fieldSchemas: list of field_schema.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFieldSchemas();

    /**
     * Property indexName: The index name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIndexName();

    /**
     * Property instanceName: The name of the OTS instance in which table will locate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName();

    /**
     * Property tableName: The table name of the OTS instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTableName();

    /**
     * Property indexSetting: Index settings.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIndexSetting() {
        return null;
    }

    /**
     * Property indexSort: This parameter specifies how data is sorted.
     * <p>
     * By default, the data is sorted in the same way as the primary key of the table.
     * If the search index contains NESTED fields, data is not sorted by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIndexSort() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SearchIndexProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SearchIndexProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SearchIndexProps> {
        java.lang.Object fieldSchemas;
        java.lang.Object indexName;
        java.lang.Object instanceName;
        java.lang.Object tableName;
        java.lang.Object indexSetting;
        java.lang.Object indexSort;

        /**
         * Sets the value of {@link SearchIndexProps#getFieldSchemas}
         * @param fieldSchemas Property fieldSchemas: list of field_schema. This parameter is required.
         * @return {@code this}
         */
        public Builder fieldSchemas(com.aliyun.ros.cdk.core.IResolvable fieldSchemas) {
            this.fieldSchemas = fieldSchemas;
            return this;
        }

        /**
         * Sets the value of {@link SearchIndexProps#getFieldSchemas}
         * @param fieldSchemas Property fieldSchemas: list of field_schema. This parameter is required.
         * @return {@code this}
         */
        public Builder fieldSchemas(java.util.List<? extends java.lang.Object> fieldSchemas) {
            this.fieldSchemas = fieldSchemas;
            return this;
        }

        /**
         * Sets the value of {@link SearchIndexProps#getIndexName}
         * @param indexName Property indexName: The index name. This parameter is required.
         * @return {@code this}
         */
        public Builder indexName(java.lang.String indexName) {
            this.indexName = indexName;
            return this;
        }

        /**
         * Sets the value of {@link SearchIndexProps#getIndexName}
         * @param indexName Property indexName: The index name. This parameter is required.
         * @return {@code this}
         */
        public Builder indexName(com.aliyun.ros.cdk.core.IResolvable indexName) {
            this.indexName = indexName;
            return this;
        }

        /**
         * Sets the value of {@link SearchIndexProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the OTS instance in which table will locate. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link SearchIndexProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the OTS instance in which table will locate. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link SearchIndexProps#getTableName}
         * @param tableName Property tableName: The table name of the OTS instance. This parameter is required.
         * @return {@code this}
         */
        public Builder tableName(java.lang.String tableName) {
            this.tableName = tableName;
            return this;
        }

        /**
         * Sets the value of {@link SearchIndexProps#getTableName}
         * @param tableName Property tableName: The table name of the OTS instance. This parameter is required.
         * @return {@code this}
         */
        public Builder tableName(com.aliyun.ros.cdk.core.IResolvable tableName) {
            this.tableName = tableName;
            return this;
        }

        /**
         * Sets the value of {@link SearchIndexProps#getIndexSetting}
         * @param indexSetting Property indexSetting: Index settings.
         * @return {@code this}
         */
        public Builder indexSetting(com.aliyun.ros.cdk.core.IResolvable indexSetting) {
            this.indexSetting = indexSetting;
            return this;
        }

        /**
         * Sets the value of {@link SearchIndexProps#getIndexSetting}
         * @param indexSetting Property indexSetting: Index settings.
         * @return {@code this}
         */
        public Builder indexSetting(com.aliyun.ros.cdk.ots.RosSearchIndex.IndexSettingProperty indexSetting) {
            this.indexSetting = indexSetting;
            return this;
        }

        /**
         * Sets the value of {@link SearchIndexProps#getIndexSort}
         * @param indexSort Property indexSort: This parameter specifies how data is sorted.
         *                  By default, the data is sorted in the same way as the primary key of the table.
         *                  If the search index contains NESTED fields, data is not sorted by default.
         * @return {@code this}
         */
        public Builder indexSort(com.aliyun.ros.cdk.core.IResolvable indexSort) {
            this.indexSort = indexSort;
            return this;
        }

        /**
         * Sets the value of {@link SearchIndexProps#getIndexSort}
         * @param indexSort Property indexSort: This parameter specifies how data is sorted.
         *                  By default, the data is sorted in the same way as the primary key of the table.
         *                  If the search index contains NESTED fields, data is not sorted by default.
         * @return {@code this}
         */
        public Builder indexSort(com.aliyun.ros.cdk.ots.RosSearchIndex.IndexSortProperty indexSort) {
            this.indexSort = indexSort;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SearchIndexProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SearchIndexProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SearchIndexProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SearchIndexProps {
        private final java.lang.Object fieldSchemas;
        private final java.lang.Object indexName;
        private final java.lang.Object instanceName;
        private final java.lang.Object tableName;
        private final java.lang.Object indexSetting;
        private final java.lang.Object indexSort;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.fieldSchemas = software.amazon.jsii.Kernel.get(this, "fieldSchemas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.indexName = software.amazon.jsii.Kernel.get(this, "indexName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tableName = software.amazon.jsii.Kernel.get(this, "tableName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.indexSetting = software.amazon.jsii.Kernel.get(this, "indexSetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.indexSort = software.amazon.jsii.Kernel.get(this, "indexSort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.fieldSchemas = java.util.Objects.requireNonNull(builder.fieldSchemas, "fieldSchemas is required");
            this.indexName = java.util.Objects.requireNonNull(builder.indexName, "indexName is required");
            this.instanceName = java.util.Objects.requireNonNull(builder.instanceName, "instanceName is required");
            this.tableName = java.util.Objects.requireNonNull(builder.tableName, "tableName is required");
            this.indexSetting = builder.indexSetting;
            this.indexSort = builder.indexSort;
        }

        @Override
        public final java.lang.Object getFieldSchemas() {
            return this.fieldSchemas;
        }

        @Override
        public final java.lang.Object getIndexName() {
            return this.indexName;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getTableName() {
            return this.tableName;
        }

        @Override
        public final java.lang.Object getIndexSetting() {
            return this.indexSetting;
        }

        @Override
        public final java.lang.Object getIndexSort() {
            return this.indexSort;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("fieldSchemas", om.valueToTree(this.getFieldSchemas()));
            data.set("indexName", om.valueToTree(this.getIndexName()));
            data.set("instanceName", om.valueToTree(this.getInstanceName()));
            data.set("tableName", om.valueToTree(this.getTableName()));
            if (this.getIndexSetting() != null) {
                data.set("indexSetting", om.valueToTree(this.getIndexSetting()));
            }
            if (this.getIndexSort() != null) {
                data.set("indexSort", om.valueToTree(this.getIndexSort()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.SearchIndexProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SearchIndexProps.Jsii$Proxy that = (SearchIndexProps.Jsii$Proxy) o;

            if (!fieldSchemas.equals(that.fieldSchemas)) return false;
            if (!indexName.equals(that.indexName)) return false;
            if (!instanceName.equals(that.instanceName)) return false;
            if (!tableName.equals(that.tableName)) return false;
            if (this.indexSetting != null ? !this.indexSetting.equals(that.indexSetting) : that.indexSetting != null) return false;
            return this.indexSort != null ? this.indexSort.equals(that.indexSort) : that.indexSort == null;
        }

        @Override
        public final int hashCode() {
            int result = this.fieldSchemas.hashCode();
            result = 31 * result + (this.indexName.hashCode());
            result = 31 * result + (this.instanceName.hashCode());
            result = 31 * result + (this.tableName.hashCode());
            result = 31 * result + (this.indexSetting != null ? this.indexSetting.hashCode() : 0);
            result = 31 * result + (this.indexSort != null ? this.indexSort.hashCode() : 0);
            return result;
        }
    }
}
