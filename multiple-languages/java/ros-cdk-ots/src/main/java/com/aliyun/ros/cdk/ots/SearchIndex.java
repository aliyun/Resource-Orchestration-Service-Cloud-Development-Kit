package com.aliyun.ros.cdk.ots;

/**
 * A ROS resource type:  `ALIYUN::OTS::SearchIndex`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.191Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.SearchIndex")
public class SearchIndex extends com.aliyun.ros.cdk.core.Resource {

    protected SearchIndex(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SearchIndex(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::OTS::SearchIndex`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public SearchIndex(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.SearchIndexProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::OTS::SearchIndex`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public SearchIndex(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.SearchIndexProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIndexName() {
        return software.amazon.jsii.Kernel.get(this, "attrIndexName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ots.SearchIndex}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ots.SearchIndex> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
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
         * @return {@code this}
         * @param fieldSchemas This parameter is required.
         */
        public Builder fieldSchemas(final java.util.List<? extends java.lang.Object> fieldSchemas) {
            this.props.fieldSchemas(fieldSchemas);
            return this;
        }
        /**
         * @return {@code this}
         * @param fieldSchemas This parameter is required.
         */
        public Builder fieldSchemas(final com.aliyun.ros.cdk.core.IResolvable fieldSchemas) {
            this.props.fieldSchemas(fieldSchemas);
            return this;
        }

        /**
         * @return {@code this}
         * @param indexName This parameter is required.
         */
        public Builder indexName(final java.lang.String indexName) {
            this.props.indexName(indexName);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param tableName This parameter is required.
         */
        public Builder tableName(final java.lang.String tableName) {
            this.props.tableName(tableName);
            return this;
        }

        /**
         * @return {@code this}
         * @param indexSetting This parameter is required.
         */
        public Builder indexSetting(final com.aliyun.ros.cdk.core.IResolvable indexSetting) {
            this.props.indexSetting(indexSetting);
            return this;
        }
        /**
         * @return {@code this}
         * @param indexSetting This parameter is required.
         */
        public Builder indexSetting(final com.aliyun.ros.cdk.ots.RosSearchIndex.IndexSettingProperty indexSetting) {
            this.props.indexSetting(indexSetting);
            return this;
        }

        /**
         * @return {@code this}
         * @param indexSort This parameter is required.
         */
        public Builder indexSort(final com.aliyun.ros.cdk.core.IResolvable indexSort) {
            this.props.indexSort(indexSort);
            return this;
        }
        /**
         * @return {@code this}
         * @param indexSort This parameter is required.
         */
        public Builder indexSort(final com.aliyun.ros.cdk.ots.RosSearchIndex.IndexSortProperty indexSort) {
            this.props.indexSort(indexSort);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ots.SearchIndex}.
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
