package com.aliyun.ros.cdk.fnf;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::FNF::Flow</code>, which is used to create a flow.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:40.254Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fnf.$Module.class, fqn = "@alicloud/ros-cdk-fnf.Flow")
public class Flow extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.fnf.IFlow {

    protected Flow(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Flow(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Flow(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fnf.FlowProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Flow(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fnf.FlowProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreatedTime: Flow creation time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreatedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Id: The unique ID of the flow.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrId() {
        return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LastModifiedTime: The most recently modified time of the flow.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifiedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrLastModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Name: The name of the flow created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fnf.FlowProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fnf.FlowProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.fnf.Flow}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fnf.Flow> {
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
        private final com.aliyun.ros.cdk.fnf.FlowProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fnf.FlowProps.Builder();
        }

        /**
         * Property definition: The definition of the created flow following the FDL syntax standard.
         * <p>
         * @return {@code this}
         * @param definition Property definition: The definition of the created flow following the FDL syntax standard. This parameter is required.
         */
        public Builder definition(final java.lang.String definition) {
            this.props.definition(definition);
            return this;
        }
        /**
         * Property definition: The definition of the created flow following the FDL syntax standard.
         * <p>
         * @return {@code this}
         * @param definition Property definition: The definition of the created flow following the FDL syntax standard. This parameter is required.
         */
        public Builder definition(final com.aliyun.ros.cdk.core.IResolvable definition) {
            this.props.definition(definition);
            return this;
        }

        /**
         * Property name: The name of the flow created.
         * <p>
         * This name is unique under the account.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the flow created. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the flow created.
         * <p>
         * This name is unique under the account.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the flow created. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property description: Create a description of the flow.
         * <p>
         * @return {@code this}
         * @param description Property description: Create a description of the flow. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Create a description of the flow.
         * <p>
         * @return {@code this}
         * @param description Property description: Create a description of the flow. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property executionMode: The execution mode of the flow.
         * <p>
         * @return {@code this}
         * @param executionMode Property executionMode: The execution mode of the flow. This parameter is required.
         */
        public Builder executionMode(final java.lang.String executionMode) {
            this.props.executionMode(executionMode);
            return this;
        }
        /**
         * Property executionMode: The execution mode of the flow.
         * <p>
         * @return {@code this}
         * @param executionMode Property executionMode: The execution mode of the flow. This parameter is required.
         */
        public Builder executionMode(final com.aliyun.ros.cdk.core.IResolvable executionMode) {
            this.props.executionMode(executionMode);
            return this;
        }

        /**
         * Property externalStorageLocation: The external storage location for the flow.
         * <p>
         * @return {@code this}
         * @param externalStorageLocation Property externalStorageLocation: The external storage location for the flow. This parameter is required.
         */
        public Builder externalStorageLocation(final java.lang.String externalStorageLocation) {
            this.props.externalStorageLocation(externalStorageLocation);
            return this;
        }
        /**
         * Property externalStorageLocation: The external storage location for the flow.
         * <p>
         * @return {@code this}
         * @param externalStorageLocation Property externalStorageLocation: The external storage location for the flow. This parameter is required.
         */
        public Builder externalStorageLocation(final com.aliyun.ros.cdk.core.IResolvable externalStorageLocation) {
            this.props.externalStorageLocation(externalStorageLocation);
            return this;
        }

        /**
         * Property requestId: The specified Request ID for this request.
         * <p>
         * If not specified, our system will help you generate a random one.
         * <p>
         * @return {@code this}
         * @param requestId Property requestId: The specified Request ID for this request. This parameter is required.
         */
        public Builder requestId(final java.lang.String requestId) {
            this.props.requestId(requestId);
            return this;
        }
        /**
         * Property requestId: The specified Request ID for this request.
         * <p>
         * If not specified, our system will help you generate a random one.
         * <p>
         * @return {@code this}
         * @param requestId Property requestId: The specified Request ID for this request. This parameter is required.
         */
        public Builder requestId(final com.aliyun.ros.cdk.core.IResolvable requestId) {
            this.props.requestId(requestId);
            return this;
        }

        /**
         * Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
         * <p>
         * @return {@code this}
         * @param roleArn Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution. This parameter is required.
         */
        public Builder roleArn(final java.lang.String roleArn) {
            this.props.roleArn(roleArn);
            return this;
        }
        /**
         * Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
         * <p>
         * @return {@code this}
         * @param roleArn Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution. This parameter is required.
         */
        public Builder roleArn(final com.aliyun.ros.cdk.core.IResolvable roleArn) {
            this.props.roleArn(roleArn);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fnf.Flow}.
         */
        @Override
        public com.aliyun.ros.cdk.fnf.Flow build() {
            return new com.aliyun.ros.cdk.fnf.Flow(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
