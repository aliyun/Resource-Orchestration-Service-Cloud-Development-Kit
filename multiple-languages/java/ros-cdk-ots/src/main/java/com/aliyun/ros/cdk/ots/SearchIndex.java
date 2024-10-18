package com.aliyun.ros.cdk.ots;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::OTS::SearchIndex</code>, which is used to create a search index for a data table.
 * <p>
 * You can create multiple search indexes for a data table.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:32.056Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.SearchIndex")
public class SearchIndex extends com.aliyun.ros.cdk.core.Resource {

    protected SearchIndex(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SearchIndex(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public SearchIndex(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.SearchIndexProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public SearchIndex(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.SearchIndexProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute IndexName: Index name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIndexName() {
        return software.amazon.jsii.Kernel.get(this, "attrIndexName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.SearchIndexProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ots.SearchIndexProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.SearchIndexProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ots.SearchIndex}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ots.SearchIndex> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ots.SearchIndexProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ots.SearchIndexProps.Builder();
        }

        /**
         * Property fieldSchemas: list of field_schema.
         * <p>
         * @return {@code this}
         * @param fieldSchemas Property fieldSchemas: list of field_schema. This parameter is required.
         */
        public Builder fieldSchemas(final com.aliyun.ros.cdk.core.IResolvable fieldSchemas) {
            this.props.fieldSchemas(fieldSchemas);
            return this;
        }
        /**
         * Property fieldSchemas: list of field_schema.
         * <p>
         * @return {@code this}
         * @param fieldSchemas Property fieldSchemas: list of field_schema. This parameter is required.
         */
        public Builder fieldSchemas(final java.util.List<? extends java.lang.Object> fieldSchemas) {
            this.props.fieldSchemas(fieldSchemas);
            return this;
        }

        /**
         * Property indexName: The index name.
         * <p>
         * @return {@code this}
         * @param indexName Property indexName: The index name. This parameter is required.
         */
        public Builder indexName(final java.lang.String indexName) {
            this.props.indexName(indexName);
            return this;
        }
        /**
         * Property indexName: The index name.
         * <p>
         * @return {@code this}
         * @param indexName Property indexName: The index name. This parameter is required.
         */
        public Builder indexName(final com.aliyun.ros.cdk.core.IResolvable indexName) {
            this.props.indexName(indexName);
            return this;
        }

        /**
         * Property instanceName: The name of the OTS instance in which table will locate.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the OTS instance in which table will locate. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: The name of the OTS instance in which table will locate.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the OTS instance in which table will locate. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property tableName: The table name of the OTS instance.
         * <p>
         * @return {@code this}
         * @param tableName Property tableName: The table name of the OTS instance. This parameter is required.
         */
        public Builder tableName(final java.lang.String tableName) {
            this.props.tableName(tableName);
            return this;
        }
        /**
         * Property tableName: The table name of the OTS instance.
         * <p>
         * @return {@code this}
         * @param tableName Property tableName: The table name of the OTS instance. This parameter is required.
         */
        public Builder tableName(final com.aliyun.ros.cdk.core.IResolvable tableName) {
            this.props.tableName(tableName);
            return this;
        }

        /**
         * Property indexSetting: Index settings.
         * <p>
         * @return {@code this}
         * @param indexSetting Property indexSetting: Index settings. This parameter is required.
         */
        public Builder indexSetting(final com.aliyun.ros.cdk.core.IResolvable indexSetting) {
            this.props.indexSetting(indexSetting);
            return this;
        }
        /**
         * Property indexSetting: Index settings.
         * <p>
         * @return {@code this}
         * @param indexSetting Property indexSetting: Index settings. This parameter is required.
         */
        public Builder indexSetting(final com.aliyun.ros.cdk.ots.RosSearchIndex.IndexSettingProperty indexSetting) {
            this.props.indexSetting(indexSetting);
            return this;
        }

        /**
         * Property indexSort: This parameter specifies how data is sorted.
         * <p>
         * By default, the data is sorted in the same way as the primary key of the table.
         * If the search index contains NESTED fields, data is not sorted by default.
         * <p>
         * @return {@code this}
         * @param indexSort Property indexSort: This parameter specifies how data is sorted. This parameter is required.
         */
        public Builder indexSort(final com.aliyun.ros.cdk.core.IResolvable indexSort) {
            this.props.indexSort(indexSort);
            return this;
        }
        /**
         * Property indexSort: This parameter specifies how data is sorted.
         * <p>
         * By default, the data is sorted in the same way as the primary key of the table.
         * If the search index contains NESTED fields, data is not sorted by default.
         * <p>
         * @return {@code this}
         * @param indexSort Property indexSort: This parameter specifies how data is sorted. This parameter is required.
         */
        public Builder indexSort(final com.aliyun.ros.cdk.ots.RosSearchIndex.IndexSortProperty indexSort) {
            this.props.indexSort(indexSort);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ots.SearchIndex}.
         */
        @Override
        public com.aliyun.ros.cdk.ots.SearchIndex build() {
            return new com.aliyun.ros.cdk.ots.SearchIndex(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
