package com.aliyun.ros.cdk.cdn;

/**
 * A ROS resource type:  `ALIYUN::CDN::Domain`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-05-20T02:42:00.976Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cdn.$Module.class, fqn = "@alicloud/ros-cdk-cdn.Domain")
public class Domain extends com.aliyun.ros.cdk.core.Resource {

    protected Domain(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Domain(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CDN::Domain`.
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
    public Domain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cdn.DomainProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CDN::Domain`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Domain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cdn.DomainProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Cname: The CNAME generated for the CDN domain.You must add a CNAME record with your DNS provider to map the CDN domain name to the CNAME.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCname() {
        return software.amazon.jsii.Kernel.get(this, "attrCname", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DomainName: The CDN domain name.
     * <p>
     * Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cdn.Domain}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cdn.Domain> {
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
        private final com.aliyun.ros.cdk.cdn.DomainProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cdn.DomainProps.Builder();
        }

        /**
         * Property cdnType: The business type.
         * <p>
         * Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
         * <p>
         * @return {@code this}
         * @param cdnType Property cdnType: The business type. This parameter is required.
         */
        public Builder cdnType(final java.lang.String cdnType) {
            this.props.cdnType(cdnType);
            return this;
        }
        /**
         * Property cdnType: The business type.
         * <p>
         * Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
         * <p>
         * @return {@code this}
         * @param cdnType Property cdnType: The business type. This parameter is required.
         */
        public Builder cdnType(final com.aliyun.ros.cdk.core.IResolvable cdnType) {
            this.props.cdnType(cdnType);
            return this;
        }

        /**
         * Property domainName: The CDN domain name.
         * <p>
         * Wildcard domain names that start with periods (.) are supported. For example, .a.com.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: The CDN domain name. This parameter is required.
         */
        public Builder domainName(final java.lang.String domainName) {
            this.props.domainName(domainName);
            return this;
        }
        /**
         * Property domainName: The CDN domain name.
         * <p>
         * Wildcard domain names that start with periods (.) are supported. For example, .a.com.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: The CDN domain name. This parameter is required.
         */
        public Builder domainName(final com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.props.domainName(domainName);
            return this;
        }

        /**
         * Property checkUrl: The validation of the origin.
         * <p>
         * @return {@code this}
         * @param checkUrl Property checkUrl: The validation of the origin. This parameter is required.
         */
        public Builder checkUrl(final java.lang.String checkUrl) {
            this.props.checkUrl(checkUrl);
            return this;
        }
        /**
         * Property checkUrl: The validation of the origin.
         * <p>
         * @return {@code this}
         * @param checkUrl Property checkUrl: The validation of the origin. This parameter is required.
         */
        public Builder checkUrl(final com.aliyun.ros.cdk.core.IResolvable checkUrl) {
            this.props.checkUrl(checkUrl);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * If this is left blank, the system automatically fills in the ID of the default resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * If this is left blank, the system automatically fills in the ID of the default resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property scope: Valid values: domestic, overseas, and global.
         * <p>
         * Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
         * <p>
         * @return {@code this}
         * @param scope Property scope: Valid values: domestic, overseas, and global. This parameter is required.
         */
        public Builder scope(final java.lang.String scope) {
            this.props.scope(scope);
            return this;
        }
        /**
         * Property scope: Valid values: domestic, overseas, and global.
         * <p>
         * Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
         * <p>
         * @return {@code this}
         * @param scope Property scope: Valid values: domestic, overseas, and global. This parameter is required.
         */
        public Builder scope(final com.aliyun.ros.cdk.core.IResolvable scope) {
            this.props.scope(scope);
            return this;
        }

        /**
         * Property sources: The list of origin URLs.
         * <p>
         * @return {@code this}
         * @param sources Property sources: The list of origin URLs. This parameter is required.
         */
        public Builder sources(final java.lang.String sources) {
            this.props.sources(sources);
            return this;
        }
        /**
         * Property sources: The list of origin URLs.
         * <p>
         * @return {@code this}
         * @param sources Property sources: The list of origin URLs. This parameter is required.
         */
        public Builder sources(final com.aliyun.ros.cdk.core.IResolvable sources) {
            this.props.sources(sources);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.cdn.RosDomain.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
         * <p>
         * @return {@code this}
         * @param topLevelDomain Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist. This parameter is required.
         */
        public Builder topLevelDomain(final java.lang.String topLevelDomain) {
            this.props.topLevelDomain(topLevelDomain);
            return this;
        }
        /**
         * Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
         * <p>
         * @return {@code this}
         * @param topLevelDomain Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist. This parameter is required.
         */
        public Builder topLevelDomain(final com.aliyun.ros.cdk.core.IResolvable topLevelDomain) {
            this.props.topLevelDomain(topLevelDomain);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cdn.Domain}.
         */
        @Override
        public com.aliyun.ros.cdk.cdn.Domain build() {
            return new com.aliyun.ros.cdk.cdn.Domain(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
