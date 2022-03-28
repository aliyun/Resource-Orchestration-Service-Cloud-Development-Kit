package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  `ALIYUN::VPC::BgpGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:03.713Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.BgpGroup")
public class BgpGroup extends com.aliyun.ros.cdk.core.Resource {

    protected BgpGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected BgpGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::VPC::BgpGroup`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public BgpGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.BgpGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::VPC::BgpGroup`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public BgpGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.BgpGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BgpGroupId: The ID of the BGP group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBgpGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrBgpGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Name: The name of the BGP group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.BgpGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.BgpGroup> {
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
        private final com.aliyun.ros.cdk.vpc.BgpGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.BgpGroupProps.Builder();
        }

        /**
         * Property peerAsn: The AS number of the BGP peer.
         * <p>
         * @return {@code this}
         * @param peerAsn Property peerAsn: The AS number of the BGP peer. This parameter is required.
         */
        public Builder peerAsn(final java.lang.Number peerAsn) {
            this.props.peerAsn(peerAsn);
            return this;
        }
        /**
         * Property peerAsn: The AS number of the BGP peer.
         * <p>
         * @return {@code this}
         * @param peerAsn Property peerAsn: The AS number of the BGP peer. This parameter is required.
         */
        public Builder peerAsn(final com.aliyun.ros.cdk.core.IResolvable peerAsn) {
            this.props.peerAsn(peerAsn);
            return this;
        }

        /**
         * Property routerId: The ID of the VBR.
         * <p>
         * @return {@code this}
         * @param routerId Property routerId: The ID of the VBR. This parameter is required.
         */
        public Builder routerId(final java.lang.String routerId) {
            this.props.routerId(routerId);
            return this;
        }
        /**
         * Property routerId: The ID of the VBR.
         * <p>
         * @return {@code this}
         * @param routerId Property routerId: The ID of the VBR. This parameter is required.
         */
        public Builder routerId(final com.aliyun.ros.cdk.core.IResolvable routerId) {
            this.props.routerId(routerId);
            return this;
        }

        /**
         * Property authKey: The authentication key of the BGP group.
         * <p>
         * @return {@code this}
         * @param authKey Property authKey: The authentication key of the BGP group. This parameter is required.
         */
        public Builder authKey(final java.lang.String authKey) {
            this.props.authKey(authKey);
            return this;
        }
        /**
         * Property authKey: The authentication key of the BGP group.
         * <p>
         * @return {@code this}
         * @param authKey Property authKey: The authentication key of the BGP group. This parameter is required.
         */
        public Builder authKey(final com.aliyun.ros.cdk.core.IResolvable authKey) {
            this.props.authKey(authKey);
            return this;
        }

        /**
         * Property description: The description of the BGP group.
         * <p>
         * The description must be 2 to 256 characters in length.
         * It must start with a letter but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the BGP group. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the BGP group.
         * <p>
         * The description must be 2 to 256 characters in length.
         * It must start with a letter but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the BGP group. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property isFakeAsn: A router that runs BGP typically belongs to only one AS.
         * <p>
         * In some cases, for example,
         * the AS needs to be migrated or is merged with another AS, a new AS number replaces
         * the original one.
         * <p>
         * @return {@code this}
         * @param isFakeAsn Property isFakeAsn: A router that runs BGP typically belongs to only one AS. This parameter is required.
         */
        public Builder isFakeAsn(final java.lang.Boolean isFakeAsn) {
            this.props.isFakeAsn(isFakeAsn);
            return this;
        }
        /**
         * Property isFakeAsn: A router that runs BGP typically belongs to only one AS.
         * <p>
         * In some cases, for example,
         * the AS needs to be migrated or is merged with another AS, a new AS number replaces
         * the original one.
         * <p>
         * @return {@code this}
         * @param isFakeAsn Property isFakeAsn: A router that runs BGP typically belongs to only one AS. This parameter is required.
         */
        public Builder isFakeAsn(final com.aliyun.ros.cdk.core.IResolvable isFakeAsn) {
            this.props.isFakeAsn(isFakeAsn);
            return this;
        }

        /**
         * Property localAsn: The AS number on the Alibaba Cloud side.
         * <p>
         * @return {@code this}
         * @param localAsn Property localAsn: The AS number on the Alibaba Cloud side. This parameter is required.
         */
        public Builder localAsn(final java.lang.Number localAsn) {
            this.props.localAsn(localAsn);
            return this;
        }
        /**
         * Property localAsn: The AS number on the Alibaba Cloud side.
         * <p>
         * @return {@code this}
         * @param localAsn Property localAsn: The AS number on the Alibaba Cloud side. This parameter is required.
         */
        public Builder localAsn(final com.aliyun.ros.cdk.core.IResolvable localAsn) {
            this.props.localAsn(localAsn);
            return this;
        }

        /**
         * Property name: The name of the BGP group.
         * <p>
         * The name must be 2 to 128 characters in length and can
         * contain digits, periods (.), underscores (_), and hyphens (-). The name must start
         * with a letter but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the BGP group. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the BGP group.
         * <p>
         * The name must be 2 to 128 characters in length and can
         * contain digits, periods (.), underscores (_), and hyphens (-). The name must start
         * with a letter but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the BGP group. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.BgpGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.BgpGroup build() {
            return new com.aliyun.ros.cdk.vpc.BgpGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
