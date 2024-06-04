package com.aliyun.ros.cdk.cen;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CEN::TransitRouterVbrAttachment</code>, which is used to create a virtual border router (VBR) connection from an Enterprise Edition transit router.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:52.952Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.TransitRouterVbrAttachment")
public class TransitRouterVbrAttachment extends com.aliyun.ros.cdk.core.Resource {

    protected TransitRouterVbrAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TransitRouterVbrAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public TransitRouterVbrAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterVbrAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public TransitRouterVbrAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterVbrAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AutoPublishRouteEnabled: AutoPublishRouteEnabled.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAutoPublishRouteEnabled() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoPublishRouteEnabled", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CenId: CenId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCenId() {
        return software.amazon.jsii.Kernel.get(this, "attrCenId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ClientToken: ClientToken.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClientToken() {
        return software.amazon.jsii.Kernel.get(this, "attrClientToken", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceType: ResourceType.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterAttachmentDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterAttachmentId: The first ID of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterAttachmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterAttachmentName: TransitRouterAttachmentName.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterAttachmentName() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterId: TransitRouterId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VbrId: VbrId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVbrId() {
        return software.amazon.jsii.Kernel.get(this, "attrVbrId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VbrOwnerId: VbrOwnerId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVbrOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "attrVbrOwnerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterVbrAttachmentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.TransitRouterVbrAttachmentProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterVbrAttachmentProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.TransitRouterVbrAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.TransitRouterVbrAttachment> {
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
        private final com.aliyun.ros.cdk.cen.TransitRouterVbrAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.TransitRouterVbrAttachmentProps.Builder();
        }

        /**
         * Property vbrId: VbrId.
         * <p>
         * @return {@code this}
         * @param vbrId Property vbrId: VbrId. This parameter is required.
         */
        public Builder vbrId(final java.lang.String vbrId) {
            this.props.vbrId(vbrId);
            return this;
        }
        /**
         * Property vbrId: VbrId.
         * <p>
         * @return {@code this}
         * @param vbrId Property vbrId: VbrId. This parameter is required.
         */
        public Builder vbrId(final com.aliyun.ros.cdk.core.IResolvable vbrId) {
            this.props.vbrId(vbrId);
            return this;
        }

        /**
         * Property autoPublishRouteEnabled: AutoPublishRouteEnabled.
         * <p>
         * @return {@code this}
         * @param autoPublishRouteEnabled Property autoPublishRouteEnabled: AutoPublishRouteEnabled. This parameter is required.
         */
        public Builder autoPublishRouteEnabled(final java.lang.Boolean autoPublishRouteEnabled) {
            this.props.autoPublishRouteEnabled(autoPublishRouteEnabled);
            return this;
        }
        /**
         * Property autoPublishRouteEnabled: AutoPublishRouteEnabled.
         * <p>
         * @return {@code this}
         * @param autoPublishRouteEnabled Property autoPublishRouteEnabled: AutoPublishRouteEnabled. This parameter is required.
         */
        public Builder autoPublishRouteEnabled(final com.aliyun.ros.cdk.core.IResolvable autoPublishRouteEnabled) {
            this.props.autoPublishRouteEnabled(autoPublishRouteEnabled);
            return this;
        }

        /**
         * Property cenId: CenId.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: CenId. This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * Property cenId: CenId.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: CenId. This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription. This parameter is required.
         */
        public Builder transitRouterAttachmentDescription(final java.lang.String transitRouterAttachmentDescription) {
            this.props.transitRouterAttachmentDescription(transitRouterAttachmentDescription);
            return this;
        }
        /**
         * Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription. This parameter is required.
         */
        public Builder transitRouterAttachmentDescription(final com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentDescription) {
            this.props.transitRouterAttachmentDescription(transitRouterAttachmentDescription);
            return this;
        }

        /**
         * Property transitRouterAttachmentName: TransitRouterAttachmentName.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: TransitRouterAttachmentName. This parameter is required.
         */
        public Builder transitRouterAttachmentName(final java.lang.String transitRouterAttachmentName) {
            this.props.transitRouterAttachmentName(transitRouterAttachmentName);
            return this;
        }
        /**
         * Property transitRouterAttachmentName: TransitRouterAttachmentName.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: TransitRouterAttachmentName. This parameter is required.
         */
        public Builder transitRouterAttachmentName(final com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentName) {
            this.props.transitRouterAttachmentName(transitRouterAttachmentName);
            return this;
        }

        /**
         * Property transitRouterId: TransitRouterId.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: TransitRouterId. This parameter is required.
         */
        public Builder transitRouterId(final java.lang.String transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }
        /**
         * Property transitRouterId: TransitRouterId.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: TransitRouterId. This parameter is required.
         */
        public Builder transitRouterId(final com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }

        /**
         * Property vbrOwnerId: VbrOwnerId.
         * <p>
         * @return {@code this}
         * @param vbrOwnerId Property vbrOwnerId: VbrOwnerId. This parameter is required.
         */
        public Builder vbrOwnerId(final java.lang.Number vbrOwnerId) {
            this.props.vbrOwnerId(vbrOwnerId);
            return this;
        }
        /**
         * Property vbrOwnerId: VbrOwnerId.
         * <p>
         * @return {@code this}
         * @param vbrOwnerId Property vbrOwnerId: VbrOwnerId. This parameter is required.
         */
        public Builder vbrOwnerId(final com.aliyun.ros.cdk.core.IResolvable vbrOwnerId) {
            this.props.vbrOwnerId(vbrOwnerId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.TransitRouterVbrAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.TransitRouterVbrAttachment build() {
            return new com.aliyun.ros.cdk.cen.TransitRouterVbrAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
