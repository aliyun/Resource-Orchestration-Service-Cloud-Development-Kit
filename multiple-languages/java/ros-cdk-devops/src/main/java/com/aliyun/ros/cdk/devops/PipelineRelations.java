package com.aliyun.ros.cdk.devops;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DEVOPS::PipelineRelations</code>, which is used to associate resources with a pipeline.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:13.740Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.devops.$Module.class, fqn = "@alicloud/ros-cdk-devops.PipelineRelations")
public class PipelineRelations extends com.aliyun.ros.cdk.core.Resource {

    protected PipelineRelations(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PipelineRelations(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public PipelineRelations(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.devops.PipelineRelationsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public PipelineRelations(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.devops.PipelineRelationsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.devops.PipelineRelationsProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.devops.PipelineRelationsProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.devops.PipelineRelationsProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.devops.PipelineRelations}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.devops.PipelineRelations> {
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
        private final com.aliyun.ros.cdk.devops.PipelineRelationsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.devops.PipelineRelationsProps.Builder();
        }

        /**
         * Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
         * <p>
         * @return {@code this}
         * @param organizationId Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links. This parameter is required.
         */
        public Builder organizationId(final java.lang.String organizationId) {
            this.props.organizationId(organizationId);
            return this;
        }
        /**
         * Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
         * <p>
         * @return {@code this}
         * @param organizationId Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links. This parameter is required.
         */
        public Builder organizationId(final com.aliyun.ros.cdk.core.IResolvable organizationId) {
            this.props.organizationId(organizationId);
            return this;
        }

        /**
         * Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.
         * <p>
         * @return {@code this}
         * @param pipelineId Property pipelineId: The pipeline ID, which can be obtained from the pipeline link. This parameter is required.
         */
        public Builder pipelineId(final java.lang.Number pipelineId) {
            this.props.pipelineId(pipelineId);
            return this;
        }
        /**
         * Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.
         * <p>
         * @return {@code this}
         * @param pipelineId Property pipelineId: The pipeline ID, which can be obtained from the pipeline link. This parameter is required.
         */
        public Builder pipelineId(final com.aliyun.ros.cdk.core.IResolvable pipelineId) {
            this.props.pipelineId(pipelineId);
            return this;
        }

        /**
         * Property relObjectIds: Ids of the associated resource.
         * <p>
         * For now, only variable group ids are supported.
         * <p>
         * @return {@code this}
         * @param relObjectIds Property relObjectIds: Ids of the associated resource. This parameter is required.
         */
        public Builder relObjectIds(final com.aliyun.ros.cdk.core.IResolvable relObjectIds) {
            this.props.relObjectIds(relObjectIds);
            return this;
        }
        /**
         * Property relObjectIds: Ids of the associated resource.
         * <p>
         * For now, only variable group ids are supported.
         * <p>
         * @return {@code this}
         * @param relObjectIds Property relObjectIds: Ids of the associated resource. This parameter is required.
         */
        public Builder relObjectIds(final java.util.List<? extends java.lang.Object> relObjectIds) {
            this.props.relObjectIds(relObjectIds);
            return this;
        }

        /**
         * Property relObjectType: Associated resource type.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>VARIABLE_GROUP</li>
         * <li>OOS_APP_ID
         * For now, only VARIABLE GROUP is supported.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param relObjectType Property relObjectType: Associated resource type. This parameter is required.
         */
        public Builder relObjectType(final java.lang.String relObjectType) {
            this.props.relObjectType(relObjectType);
            return this;
        }
        /**
         * Property relObjectType: Associated resource type.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>VARIABLE_GROUP</li>
         * <li>OOS_APP_ID
         * For now, only VARIABLE GROUP is supported.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param relObjectType Property relObjectType: Associated resource type. This parameter is required.
         */
        public Builder relObjectType(final com.aliyun.ros.cdk.core.IResolvable relObjectType) {
            this.props.relObjectType(relObjectType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.devops.PipelineRelations}.
         */
        @Override
        public com.aliyun.ros.cdk.devops.PipelineRelations build() {
            return new com.aliyun.ros.cdk.devops.PipelineRelations(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
