package com.aliyun.ros.cdk.apigateway.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ApiGateway::Apis</code>, which is used to query APIs in API Gateway.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:21.255Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.datasource.Apis")
public class Apis extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.apigateway.datasource.IApis {

    protected Apis(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Apis(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Apis(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.apigateway.datasource.ApisProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Apis(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.apigateway.datasource.ApisProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Apis(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ApiIds: The list of The ApiGateway api ids.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrApiIds() {
        return software.amazon.jsii.Kernel.get(this, "attrApiIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Apis: The information about ApiGateway apis.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrApis() {
        return software.amazon.jsii.Kernel.get(this, "attrApis", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.datasource.ApisProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apigateway.datasource.ApisProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.datasource.Apis}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.datasource.Apis> {
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
        private com.aliyun.ros.cdk.apigateway.datasource.ApisProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property apiId: ID of the specified API.
         * <p>
         * @return {@code this}
         * @param apiId Property apiId: ID of the specified API. This parameter is required.
         */
        public Builder apiId(final java.lang.String apiId) {
            this.props().apiId(apiId);
            return this;
        }
        /**
         * Property apiId: ID of the specified API.
         * <p>
         * @return {@code this}
         * @param apiId Property apiId: ID of the specified API. This parameter is required.
         */
        public Builder apiId(final com.aliyun.ros.cdk.core.IResolvable apiId) {
            this.props().apiId(apiId);
            return this;
        }

        /**
         * Property apiName: API name (fuzzy matching).
         * <p>
         * @return {@code this}
         * @param apiName Property apiName: API name (fuzzy matching). This parameter is required.
         */
        public Builder apiName(final java.lang.String apiName) {
            this.props().apiName(apiName);
            return this;
        }
        /**
         * Property apiName: API name (fuzzy matching).
         * <p>
         * @return {@code this}
         * @param apiName Property apiName: API name (fuzzy matching). This parameter is required.
         */
        public Builder apiName(final com.aliyun.ros.cdk.core.IResolvable apiName) {
            this.props().apiName(apiName);
            return this;
        }

        /**
         * Property catalogId: Catalog number.
         * <p>
         * @return {@code this}
         * @param catalogId Property catalogId: Catalog number. This parameter is required.
         */
        public Builder catalogId(final java.lang.String catalogId) {
            this.props().catalogId(catalogId);
            return this;
        }
        /**
         * Property catalogId: Catalog number.
         * <p>
         * @return {@code this}
         * @param catalogId Property catalogId: Catalog number. This parameter is required.
         */
        public Builder catalogId(final com.aliyun.ros.cdk.core.IResolvable catalogId) {
            this.props().catalogId(catalogId);
            return this;
        }

        /**
         * Property enableTagAuth: Enable label validation.
         * <p>
         * @return {@code this}
         * @param enableTagAuth Property enableTagAuth: Enable label validation. This parameter is required.
         */
        public Builder enableTagAuth(final java.lang.Boolean enableTagAuth) {
            this.props().enableTagAuth(enableTagAuth);
            return this;
        }
        /**
         * Property enableTagAuth: Enable label validation.
         * <p>
         * @return {@code this}
         * @param enableTagAuth Property enableTagAuth: Enable label validation. This parameter is required.
         */
        public Builder enableTagAuth(final com.aliyun.ros.cdk.core.IResolvable enableTagAuth) {
            this.props().enableTagAuth(enableTagAuth);
            return this;
        }

        /**
         * Property groupId: ID of the specified group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: ID of the specified group. This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props().groupId(groupId);
            return this;
        }
        /**
         * Property groupId: ID of the specified group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: ID of the specified group. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props().groupId(groupId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }

        /**
         * Property visibility: Whether the API is public.
         * <p>
         * @return {@code this}
         * @param visibility Property visibility: Whether the API is public. This parameter is required.
         */
        public Builder visibility(final java.lang.String visibility) {
            this.props().visibility(visibility);
            return this;
        }
        /**
         * Property visibility: Whether the API is public.
         * <p>
         * @return {@code this}
         * @param visibility Property visibility: Whether the API is public. This parameter is required.
         */
        public Builder visibility(final com.aliyun.ros.cdk.core.IResolvable visibility) {
            this.props().visibility(visibility);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apigateway.datasource.Apis}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.datasource.Apis build() {
            return new com.aliyun.ros.cdk.apigateway.datasource.Apis(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.apigateway.datasource.ApisProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.apigateway.datasource.ApisProps.Builder();
            }
            return this.props;
        }
    }
}
