package com.aliyun.ros.cdk.oss;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::OSS::Bucket</code>, which is used to create an Object Storage Service (OSS) bucket.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:22.754Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket")
public class RosBucket extends com.aliyun.ros.cdk.core.RosResource {

    protected RosBucket(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosBucket(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.oss.RosBucket.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosBucket(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.RosBucketProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInternalDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrInternalDomainName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBucketName() {
        return software.amazon.jsii.Kernel.get(this, "bucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBucketName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bucketName", java.util.Objects.requireNonNull(value, "bucketName is required"));
    }

    /**
     */
    public void setBucketName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bucketName", java.util.Objects.requireNonNull(value, "bucketName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAccessControl() {
        return software.amazon.jsii.Kernel.get(this, "accessControl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccessControl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "accessControl", value);
    }

    /**
     */
    public void setAccessControl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accessControl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCorsConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "corsConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCorsConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "corsConfiguration", value);
    }

    /**
     */
    public void setCorsConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oss.RosBucket.CORSConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "corsConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableOssHdfsService() {
        return software.amazon.jsii.Kernel.get(this, "enableOssHdfsService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableOssHdfsService(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableOssHdfsService", value);
    }

    /**
     */
    public void setEnableOssHdfsService(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableOssHdfsService", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLifecycleConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "lifecycleConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLifecycleConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "lifecycleConfiguration", value);
    }

    /**
     */
    public void setLifecycleConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oss.RosBucket.LifecycleConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "lifecycleConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLoggingConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "loggingConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoggingConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loggingConfiguration", value);
    }

    /**
     */
    public void setLoggingConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oss.RosBucket.LoggingConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "loggingConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPolicy() {
        return software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "policy", value);
    }

    /**
     */
    public void setPolicy(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "policy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRedundancyType() {
        return software.amazon.jsii.Kernel.get(this, "redundancyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRedundancyType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "redundancyType", value);
    }

    /**
     */
    public void setRedundancyType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "redundancyType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRefererConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "refererConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRefererConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "refererConfiguration", value);
    }

    /**
     */
    public void setRefererConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oss.RosBucket.RefererConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "refererConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServerSideEncryptionConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "serverSideEncryptionConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServerSideEncryptionConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serverSideEncryptionConfiguration", value);
    }

    /**
     */
    public void setServerSideEncryptionConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oss.RosBucket.ServerSideEncryptionConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "serverSideEncryptionConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStorageClass() {
        return software.amazon.jsii.Kernel.get(this, "storageClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStorageClass(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "storageClass", value);
    }

    /**
     */
    public void setStorageClass(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "storageClass", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getTags() {
        return java.util.Optional.ofNullable((java.util.Map<java.lang.String, java.lang.Object>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))))).map(java.util.Collections::unmodifiableMap).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVersioningConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "versioningConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVersioningConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "versioningConfiguration", value);
    }

    /**
     */
    public void setVersioningConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oss.RosBucket.VersioningConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "versioningConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWebsiteConfigurationV2() {
        return software.amazon.jsii.Kernel.get(this, "websiteConfigurationV2", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWebsiteConfigurationV2(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "websiteConfigurationV2", value);
    }

    /**
     */
    public void setWebsiteConfigurationV2(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.oss.RosBucket.WebsiteConfigurationV2Property value) {
        software.amazon.jsii.Kernel.set(this, "websiteConfigurationV2", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.AbortMultipartUploadProperty")
    @software.amazon.jsii.Jsii.Proxy(AbortMultipartUploadProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AbortMultipartUploadProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCreatedBeforeDate() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDays() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AbortMultipartUploadProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AbortMultipartUploadProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AbortMultipartUploadProperty> {
            java.lang.Object createdBeforeDate;
            java.lang.Object days;

            /**
             * Sets the value of {@link AbortMultipartUploadProperty#getCreatedBeforeDate}
             * @param createdBeforeDate the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder createdBeforeDate(java.lang.String createdBeforeDate) {
                this.createdBeforeDate = createdBeforeDate;
                return this;
            }

            /**
             * Sets the value of {@link AbortMultipartUploadProperty#getCreatedBeforeDate}
             * @param createdBeforeDate the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder createdBeforeDate(com.aliyun.ros.cdk.core.IResolvable createdBeforeDate) {
                this.createdBeforeDate = createdBeforeDate;
                return this;
            }

            /**
             * Sets the value of {@link AbortMultipartUploadProperty#getDays}
             * @param days the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder days(java.lang.Number days) {
                this.days = days;
                return this;
            }

            /**
             * Sets the value of {@link AbortMultipartUploadProperty#getDays}
             * @param days the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder days(com.aliyun.ros.cdk.core.IResolvable days) {
                this.days = days;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AbortMultipartUploadProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AbortMultipartUploadProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AbortMultipartUploadProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AbortMultipartUploadProperty {
            private final java.lang.Object createdBeforeDate;
            private final java.lang.Object days;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.createdBeforeDate = software.amazon.jsii.Kernel.get(this, "createdBeforeDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.days = software.amazon.jsii.Kernel.get(this, "days", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.createdBeforeDate = builder.createdBeforeDate;
                this.days = builder.days;
            }

            @Override
            public final java.lang.Object getCreatedBeforeDate() {
                return this.createdBeforeDate;
            }

            @Override
            public final java.lang.Object getDays() {
                return this.days;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCreatedBeforeDate() != null) {
                    data.set("createdBeforeDate", om.valueToTree(this.getCreatedBeforeDate()));
                }
                if (this.getDays() != null) {
                    data.set("days", om.valueToTree(this.getDays()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.AbortMultipartUploadProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AbortMultipartUploadProperty.Jsii$Proxy that = (AbortMultipartUploadProperty.Jsii$Proxy) o;

                if (this.createdBeforeDate != null ? !this.createdBeforeDate.equals(that.createdBeforeDate) : that.createdBeforeDate != null) return false;
                return this.days != null ? this.days.equals(that.days) : that.days == null;
            }

            @Override
            public final int hashCode() {
                int result = this.createdBeforeDate != null ? this.createdBeforeDate.hashCode() : 0;
                result = 31 * result + (this.days != null ? this.days.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.CORSConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(CORSConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CORSConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCorsRule() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResponseVary() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CORSConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CORSConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CORSConfigurationProperty> {
            java.lang.Object corsRule;
            java.lang.Object responseVary;

            /**
             * Sets the value of {@link CORSConfigurationProperty#getCorsRule}
             * @param corsRule the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder corsRule(com.aliyun.ros.cdk.core.IResolvable corsRule) {
                this.corsRule = corsRule;
                return this;
            }

            /**
             * Sets the value of {@link CORSConfigurationProperty#getCorsRule}
             * @param corsRule the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder corsRule(java.util.List<? extends java.lang.Object> corsRule) {
                this.corsRule = corsRule;
                return this;
            }

            /**
             * Sets the value of {@link CORSConfigurationProperty#getResponseVary}
             * @param responseVary the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseVary(java.lang.Boolean responseVary) {
                this.responseVary = responseVary;
                return this;
            }

            /**
             * Sets the value of {@link CORSConfigurationProperty#getResponseVary}
             * @param responseVary the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder responseVary(com.aliyun.ros.cdk.core.IResolvable responseVary) {
                this.responseVary = responseVary;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CORSConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CORSConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CORSConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CORSConfigurationProperty {
            private final java.lang.Object corsRule;
            private final java.lang.Object responseVary;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.corsRule = software.amazon.jsii.Kernel.get(this, "corsRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.responseVary = software.amazon.jsii.Kernel.get(this, "responseVary", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.corsRule = builder.corsRule;
                this.responseVary = builder.responseVary;
            }

            @Override
            public final java.lang.Object getCorsRule() {
                return this.corsRule;
            }

            @Override
            public final java.lang.Object getResponseVary() {
                return this.responseVary;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCorsRule() != null) {
                    data.set("corsRule", om.valueToTree(this.getCorsRule()));
                }
                if (this.getResponseVary() != null) {
                    data.set("responseVary", om.valueToTree(this.getResponseVary()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.CORSConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CORSConfigurationProperty.Jsii$Proxy that = (CORSConfigurationProperty.Jsii$Proxy) o;

                if (this.corsRule != null ? !this.corsRule.equals(that.corsRule) : that.corsRule != null) return false;
                return this.responseVary != null ? this.responseVary.equals(that.responseVary) : that.responseVary == null;
            }

            @Override
            public final int hashCode() {
                int result = this.corsRule != null ? this.corsRule.hashCode() : 0;
                result = 31 * result + (this.responseVary != null ? this.responseVary.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.CORSRuleProperty")
    @software.amazon.jsii.Jsii.Proxy(CORSRuleProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CORSRuleProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAllowedHeader() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAllowedMethod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAllowedOrigin() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExposeHeader() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMaxAgeSeconds() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CORSRuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CORSRuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CORSRuleProperty> {
            java.lang.Object allowedHeader;
            java.lang.Object allowedMethod;
            java.lang.Object allowedOrigin;
            java.lang.Object exposeHeader;
            java.lang.Object maxAgeSeconds;

            /**
             * Sets the value of {@link CORSRuleProperty#getAllowedHeader}
             * @param allowedHeader the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowedHeader(com.aliyun.ros.cdk.core.IResolvable allowedHeader) {
                this.allowedHeader = allowedHeader;
                return this;
            }

            /**
             * Sets the value of {@link CORSRuleProperty#getAllowedHeader}
             * @param allowedHeader the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowedHeader(java.util.List<? extends java.lang.Object> allowedHeader) {
                this.allowedHeader = allowedHeader;
                return this;
            }

            /**
             * Sets the value of {@link CORSRuleProperty#getAllowedMethod}
             * @param allowedMethod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowedMethod(com.aliyun.ros.cdk.core.IResolvable allowedMethod) {
                this.allowedMethod = allowedMethod;
                return this;
            }

            /**
             * Sets the value of {@link CORSRuleProperty#getAllowedMethod}
             * @param allowedMethod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowedMethod(java.util.List<? extends java.lang.Object> allowedMethod) {
                this.allowedMethod = allowedMethod;
                return this;
            }

            /**
             * Sets the value of {@link CORSRuleProperty#getAllowedOrigin}
             * @param allowedOrigin the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowedOrigin(com.aliyun.ros.cdk.core.IResolvable allowedOrigin) {
                this.allowedOrigin = allowedOrigin;
                return this;
            }

            /**
             * Sets the value of {@link CORSRuleProperty#getAllowedOrigin}
             * @param allowedOrigin the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowedOrigin(java.util.List<? extends java.lang.Object> allowedOrigin) {
                this.allowedOrigin = allowedOrigin;
                return this;
            }

            /**
             * Sets the value of {@link CORSRuleProperty#getExposeHeader}
             * @param exposeHeader the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder exposeHeader(com.aliyun.ros.cdk.core.IResolvable exposeHeader) {
                this.exposeHeader = exposeHeader;
                return this;
            }

            /**
             * Sets the value of {@link CORSRuleProperty#getExposeHeader}
             * @param exposeHeader the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder exposeHeader(java.util.List<? extends java.lang.Object> exposeHeader) {
                this.exposeHeader = exposeHeader;
                return this;
            }

            /**
             * Sets the value of {@link CORSRuleProperty#getMaxAgeSeconds}
             * @param maxAgeSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxAgeSeconds(java.lang.Number maxAgeSeconds) {
                this.maxAgeSeconds = maxAgeSeconds;
                return this;
            }

            /**
             * Sets the value of {@link CORSRuleProperty#getMaxAgeSeconds}
             * @param maxAgeSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder maxAgeSeconds(com.aliyun.ros.cdk.core.IResolvable maxAgeSeconds) {
                this.maxAgeSeconds = maxAgeSeconds;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CORSRuleProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CORSRuleProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CORSRuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CORSRuleProperty {
            private final java.lang.Object allowedHeader;
            private final java.lang.Object allowedMethod;
            private final java.lang.Object allowedOrigin;
            private final java.lang.Object exposeHeader;
            private final java.lang.Object maxAgeSeconds;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.allowedHeader = software.amazon.jsii.Kernel.get(this, "allowedHeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.allowedMethod = software.amazon.jsii.Kernel.get(this, "allowedMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.allowedOrigin = software.amazon.jsii.Kernel.get(this, "allowedOrigin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.exposeHeader = software.amazon.jsii.Kernel.get(this, "exposeHeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.maxAgeSeconds = software.amazon.jsii.Kernel.get(this, "maxAgeSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.allowedHeader = builder.allowedHeader;
                this.allowedMethod = builder.allowedMethod;
                this.allowedOrigin = builder.allowedOrigin;
                this.exposeHeader = builder.exposeHeader;
                this.maxAgeSeconds = builder.maxAgeSeconds;
            }

            @Override
            public final java.lang.Object getAllowedHeader() {
                return this.allowedHeader;
            }

            @Override
            public final java.lang.Object getAllowedMethod() {
                return this.allowedMethod;
            }

            @Override
            public final java.lang.Object getAllowedOrigin() {
                return this.allowedOrigin;
            }

            @Override
            public final java.lang.Object getExposeHeader() {
                return this.exposeHeader;
            }

            @Override
            public final java.lang.Object getMaxAgeSeconds() {
                return this.maxAgeSeconds;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAllowedHeader() != null) {
                    data.set("allowedHeader", om.valueToTree(this.getAllowedHeader()));
                }
                if (this.getAllowedMethod() != null) {
                    data.set("allowedMethod", om.valueToTree(this.getAllowedMethod()));
                }
                if (this.getAllowedOrigin() != null) {
                    data.set("allowedOrigin", om.valueToTree(this.getAllowedOrigin()));
                }
                if (this.getExposeHeader() != null) {
                    data.set("exposeHeader", om.valueToTree(this.getExposeHeader()));
                }
                if (this.getMaxAgeSeconds() != null) {
                    data.set("maxAgeSeconds", om.valueToTree(this.getMaxAgeSeconds()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.CORSRuleProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CORSRuleProperty.Jsii$Proxy that = (CORSRuleProperty.Jsii$Proxy) o;

                if (this.allowedHeader != null ? !this.allowedHeader.equals(that.allowedHeader) : that.allowedHeader != null) return false;
                if (this.allowedMethod != null ? !this.allowedMethod.equals(that.allowedMethod) : that.allowedMethod != null) return false;
                if (this.allowedOrigin != null ? !this.allowedOrigin.equals(that.allowedOrigin) : that.allowedOrigin != null) return false;
                if (this.exposeHeader != null ? !this.exposeHeader.equals(that.exposeHeader) : that.exposeHeader != null) return false;
                return this.maxAgeSeconds != null ? this.maxAgeSeconds.equals(that.maxAgeSeconds) : that.maxAgeSeconds == null;
            }

            @Override
            public final int hashCode() {
                int result = this.allowedHeader != null ? this.allowedHeader.hashCode() : 0;
                result = 31 * result + (this.allowedMethod != null ? this.allowedMethod.hashCode() : 0);
                result = 31 * result + (this.allowedOrigin != null ? this.allowedOrigin.hashCode() : 0);
                result = 31 * result + (this.exposeHeader != null ? this.exposeHeader.hashCode() : 0);
                result = 31 * result + (this.maxAgeSeconds != null ? this.maxAgeSeconds.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.ConditionProperty")
    @software.amazon.jsii.Jsii.Proxy(ConditionProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConditionProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpErrorCodeReturnedEquals() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIncludeHeaders() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPrefixEquals() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKeySuffixEquals() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConditionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConditionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConditionProperty> {
            java.lang.Object httpErrorCodeReturnedEquals;
            java.lang.Object includeHeaders;
            java.lang.Object keyPrefixEquals;
            java.lang.Object keySuffixEquals;

            /**
             * Sets the value of {@link ConditionProperty#getHttpErrorCodeReturnedEquals}
             * @param httpErrorCodeReturnedEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpErrorCodeReturnedEquals(java.lang.String httpErrorCodeReturnedEquals) {
                this.httpErrorCodeReturnedEquals = httpErrorCodeReturnedEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getHttpErrorCodeReturnedEquals}
             * @param httpErrorCodeReturnedEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpErrorCodeReturnedEquals(com.aliyun.ros.cdk.core.IResolvable httpErrorCodeReturnedEquals) {
                this.httpErrorCodeReturnedEquals = httpErrorCodeReturnedEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getIncludeHeaders}
             * @param includeHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder includeHeaders(com.aliyun.ros.cdk.core.IResolvable includeHeaders) {
                this.includeHeaders = includeHeaders;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getIncludeHeaders}
             * @param includeHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder includeHeaders(java.util.List<? extends java.lang.Object> includeHeaders) {
                this.includeHeaders = includeHeaders;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getKeyPrefixEquals}
             * @param keyPrefixEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keyPrefixEquals(java.lang.String keyPrefixEquals) {
                this.keyPrefixEquals = keyPrefixEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getKeyPrefixEquals}
             * @param keyPrefixEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keyPrefixEquals(com.aliyun.ros.cdk.core.IResolvable keyPrefixEquals) {
                this.keyPrefixEquals = keyPrefixEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getKeySuffixEquals}
             * @param keySuffixEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keySuffixEquals(java.lang.String keySuffixEquals) {
                this.keySuffixEquals = keySuffixEquals;
                return this;
            }

            /**
             * Sets the value of {@link ConditionProperty#getKeySuffixEquals}
             * @param keySuffixEquals the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder keySuffixEquals(com.aliyun.ros.cdk.core.IResolvable keySuffixEquals) {
                this.keySuffixEquals = keySuffixEquals;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConditionProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConditionProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConditionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConditionProperty {
            private final java.lang.Object httpErrorCodeReturnedEquals;
            private final java.lang.Object includeHeaders;
            private final java.lang.Object keyPrefixEquals;
            private final java.lang.Object keySuffixEquals;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.httpErrorCodeReturnedEquals = software.amazon.jsii.Kernel.get(this, "httpErrorCodeReturnedEquals", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.includeHeaders = software.amazon.jsii.Kernel.get(this, "includeHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.keyPrefixEquals = software.amazon.jsii.Kernel.get(this, "keyPrefixEquals", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.keySuffixEquals = software.amazon.jsii.Kernel.get(this, "keySuffixEquals", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.httpErrorCodeReturnedEquals = builder.httpErrorCodeReturnedEquals;
                this.includeHeaders = builder.includeHeaders;
                this.keyPrefixEquals = builder.keyPrefixEquals;
                this.keySuffixEquals = builder.keySuffixEquals;
            }

            @Override
            public final java.lang.Object getHttpErrorCodeReturnedEquals() {
                return this.httpErrorCodeReturnedEquals;
            }

            @Override
            public final java.lang.Object getIncludeHeaders() {
                return this.includeHeaders;
            }

            @Override
            public final java.lang.Object getKeyPrefixEquals() {
                return this.keyPrefixEquals;
            }

            @Override
            public final java.lang.Object getKeySuffixEquals() {
                return this.keySuffixEquals;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getHttpErrorCodeReturnedEquals() != null) {
                    data.set("httpErrorCodeReturnedEquals", om.valueToTree(this.getHttpErrorCodeReturnedEquals()));
                }
                if (this.getIncludeHeaders() != null) {
                    data.set("includeHeaders", om.valueToTree(this.getIncludeHeaders()));
                }
                if (this.getKeyPrefixEquals() != null) {
                    data.set("keyPrefixEquals", om.valueToTree(this.getKeyPrefixEquals()));
                }
                if (this.getKeySuffixEquals() != null) {
                    data.set("keySuffixEquals", om.valueToTree(this.getKeySuffixEquals()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.ConditionProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConditionProperty.Jsii$Proxy that = (ConditionProperty.Jsii$Proxy) o;

                if (this.httpErrorCodeReturnedEquals != null ? !this.httpErrorCodeReturnedEquals.equals(that.httpErrorCodeReturnedEquals) : that.httpErrorCodeReturnedEquals != null) return false;
                if (this.includeHeaders != null ? !this.includeHeaders.equals(that.includeHeaders) : that.includeHeaders != null) return false;
                if (this.keyPrefixEquals != null ? !this.keyPrefixEquals.equals(that.keyPrefixEquals) : that.keyPrefixEquals != null) return false;
                return this.keySuffixEquals != null ? this.keySuffixEquals.equals(that.keySuffixEquals) : that.keySuffixEquals == null;
            }

            @Override
            public final int hashCode() {
                int result = this.httpErrorCodeReturnedEquals != null ? this.httpErrorCodeReturnedEquals.hashCode() : 0;
                result = 31 * result + (this.includeHeaders != null ? this.includeHeaders.hashCode() : 0);
                result = 31 * result + (this.keyPrefixEquals != null ? this.keyPrefixEquals.hashCode() : 0);
                result = 31 * result + (this.keySuffixEquals != null ? this.keySuffixEquals.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.ErrorDocumentProperty")
    @software.amazon.jsii.Jsii.Proxy(ErrorDocumentProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ErrorDocumentProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpStatus() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ErrorDocumentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ErrorDocumentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ErrorDocumentProperty> {
            java.lang.Object key;
            java.lang.Object httpStatus;

            /**
             * Sets the value of {@link ErrorDocumentProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link ErrorDocumentProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link ErrorDocumentProperty#getHttpStatus}
             * @param httpStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpStatus(java.lang.String httpStatus) {
                this.httpStatus = httpStatus;
                return this;
            }

            /**
             * Sets the value of {@link ErrorDocumentProperty#getHttpStatus}
             * @param httpStatus the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpStatus(com.aliyun.ros.cdk.core.IResolvable httpStatus) {
                this.httpStatus = httpStatus;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ErrorDocumentProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ErrorDocumentProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ErrorDocumentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ErrorDocumentProperty {
            private final java.lang.Object key;
            private final java.lang.Object httpStatus;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpStatus = software.amazon.jsii.Kernel.get(this, "httpStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.httpStatus = builder.httpStatus;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getHttpStatus() {
                return this.httpStatus;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getHttpStatus() != null) {
                    data.set("httpStatus", om.valueToTree(this.getHttpStatus()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.ErrorDocumentProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ErrorDocumentProperty.Jsii$Proxy that = (ErrorDocumentProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.httpStatus != null ? this.httpStatus.equals(that.httpStatus) : that.httpStatus == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.httpStatus != null ? this.httpStatus.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.ExpirationProperty")
    @software.amazon.jsii.Jsii.Proxy(ExpirationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ExpirationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCreatedBeforeDate() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDays() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExpiredObjectDeleteMarker() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ExpirationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ExpirationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ExpirationProperty> {
            java.lang.Object createdBeforeDate;
            java.lang.Object days;
            java.lang.Object expiredObjectDeleteMarker;

            /**
             * Sets the value of {@link ExpirationProperty#getCreatedBeforeDate}
             * @param createdBeforeDate the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder createdBeforeDate(java.lang.String createdBeforeDate) {
                this.createdBeforeDate = createdBeforeDate;
                return this;
            }

            /**
             * Sets the value of {@link ExpirationProperty#getCreatedBeforeDate}
             * @param createdBeforeDate the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder createdBeforeDate(com.aliyun.ros.cdk.core.IResolvable createdBeforeDate) {
                this.createdBeforeDate = createdBeforeDate;
                return this;
            }

            /**
             * Sets the value of {@link ExpirationProperty#getDays}
             * @param days the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder days(java.lang.Number days) {
                this.days = days;
                return this;
            }

            /**
             * Sets the value of {@link ExpirationProperty#getDays}
             * @param days the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder days(com.aliyun.ros.cdk.core.IResolvable days) {
                this.days = days;
                return this;
            }

            /**
             * Sets the value of {@link ExpirationProperty#getExpiredObjectDeleteMarker}
             * @param expiredObjectDeleteMarker the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder expiredObjectDeleteMarker(java.lang.Boolean expiredObjectDeleteMarker) {
                this.expiredObjectDeleteMarker = expiredObjectDeleteMarker;
                return this;
            }

            /**
             * Sets the value of {@link ExpirationProperty#getExpiredObjectDeleteMarker}
             * @param expiredObjectDeleteMarker the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder expiredObjectDeleteMarker(com.aliyun.ros.cdk.core.IResolvable expiredObjectDeleteMarker) {
                this.expiredObjectDeleteMarker = expiredObjectDeleteMarker;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ExpirationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ExpirationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ExpirationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ExpirationProperty {
            private final java.lang.Object createdBeforeDate;
            private final java.lang.Object days;
            private final java.lang.Object expiredObjectDeleteMarker;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.createdBeforeDate = software.amazon.jsii.Kernel.get(this, "createdBeforeDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.days = software.amazon.jsii.Kernel.get(this, "days", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.expiredObjectDeleteMarker = software.amazon.jsii.Kernel.get(this, "expiredObjectDeleteMarker", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.createdBeforeDate = builder.createdBeforeDate;
                this.days = builder.days;
                this.expiredObjectDeleteMarker = builder.expiredObjectDeleteMarker;
            }

            @Override
            public final java.lang.Object getCreatedBeforeDate() {
                return this.createdBeforeDate;
            }

            @Override
            public final java.lang.Object getDays() {
                return this.days;
            }

            @Override
            public final java.lang.Object getExpiredObjectDeleteMarker() {
                return this.expiredObjectDeleteMarker;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCreatedBeforeDate() != null) {
                    data.set("createdBeforeDate", om.valueToTree(this.getCreatedBeforeDate()));
                }
                if (this.getDays() != null) {
                    data.set("days", om.valueToTree(this.getDays()));
                }
                if (this.getExpiredObjectDeleteMarker() != null) {
                    data.set("expiredObjectDeleteMarker", om.valueToTree(this.getExpiredObjectDeleteMarker()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.ExpirationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ExpirationProperty.Jsii$Proxy that = (ExpirationProperty.Jsii$Proxy) o;

                if (this.createdBeforeDate != null ? !this.createdBeforeDate.equals(that.createdBeforeDate) : that.createdBeforeDate != null) return false;
                if (this.days != null ? !this.days.equals(that.days) : that.days != null) return false;
                return this.expiredObjectDeleteMarker != null ? this.expiredObjectDeleteMarker.equals(that.expiredObjectDeleteMarker) : that.expiredObjectDeleteMarker == null;
            }

            @Override
            public final int hashCode() {
                int result = this.createdBeforeDate != null ? this.createdBeforeDate.hashCode() : 0;
                result = 31 * result + (this.days != null ? this.days.hashCode() : 0);
                result = 31 * result + (this.expiredObjectDeleteMarker != null ? this.expiredObjectDeleteMarker.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.FilterProperty")
    @software.amazon.jsii.Jsii.Proxy(FilterProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface FilterProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNot() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link FilterProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link FilterProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<FilterProperty> {
            java.lang.Object not;

            /**
             * Sets the value of {@link FilterProperty#getNot}
             * @param not the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder not(com.aliyun.ros.cdk.core.IResolvable not) {
                this.not = not;
                return this;
            }

            /**
             * Sets the value of {@link FilterProperty#getNot}
             * @param not the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder not(com.aliyun.ros.cdk.oss.RosBucket.NotProperty not) {
                this.not = not;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link FilterProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public FilterProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link FilterProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FilterProperty {
            private final java.lang.Object not;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.not = software.amazon.jsii.Kernel.get(this, "not", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.not = builder.not;
            }

            @Override
            public final java.lang.Object getNot() {
                return this.not;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getNot() != null) {
                    data.set("not", om.valueToTree(this.getNot()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.FilterProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                FilterProperty.Jsii$Proxy that = (FilterProperty.Jsii$Proxy) o;

                return this.not != null ? this.not.equals(that.not) : that.not == null;
            }

            @Override
            public final int hashCode() {
                int result = this.not != null ? this.not.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.IncludeHeadersProperty")
    @software.amazon.jsii.Jsii.Proxy(IncludeHeadersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface IncludeHeadersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEqualsTo() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link IncludeHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link IncludeHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<IncludeHeadersProperty> {
            java.lang.Object key;
            java.lang.Object equalsTo;

            /**
             * Sets the value of {@link IncludeHeadersProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link IncludeHeadersProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link IncludeHeadersProperty#getEqualsTo}
             * @param equalsTo the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder equalsTo(java.lang.String equalsTo) {
                this.equalsTo = equalsTo;
                return this;
            }

            /**
             * Sets the value of {@link IncludeHeadersProperty#getEqualsTo}
             * @param equalsTo the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder equalsTo(com.aliyun.ros.cdk.core.IResolvable equalsTo) {
                this.equalsTo = equalsTo;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link IncludeHeadersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public IncludeHeadersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link IncludeHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IncludeHeadersProperty {
            private final java.lang.Object key;
            private final java.lang.Object equalsTo;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.equalsTo = software.amazon.jsii.Kernel.get(this, "equalsTo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.equalsTo = builder.equalsTo;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getEqualsTo() {
                return this.equalsTo;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getEqualsTo() != null) {
                    data.set("equalsTo", om.valueToTree(this.getEqualsTo()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.IncludeHeadersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                IncludeHeadersProperty.Jsii$Proxy that = (IncludeHeadersProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.equalsTo != null ? this.equalsTo.equals(that.equalsTo) : that.equalsTo == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.equalsTo != null ? this.equalsTo.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.IndexDocumentProperty")
    @software.amazon.jsii.Jsii.Proxy(IndexDocumentProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface IndexDocumentProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSuffix();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSupportSubDir() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link IndexDocumentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link IndexDocumentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<IndexDocumentProperty> {
            java.lang.Object suffix;
            java.lang.Object supportSubDir;
            java.lang.Object type;

            /**
             * Sets the value of {@link IndexDocumentProperty#getSuffix}
             * @param suffix the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder suffix(java.lang.String suffix) {
                this.suffix = suffix;
                return this;
            }

            /**
             * Sets the value of {@link IndexDocumentProperty#getSuffix}
             * @param suffix the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder suffix(com.aliyun.ros.cdk.core.IResolvable suffix) {
                this.suffix = suffix;
                return this;
            }

            /**
             * Sets the value of {@link IndexDocumentProperty#getSupportSubDir}
             * @param supportSubDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder supportSubDir(java.lang.String supportSubDir) {
                this.supportSubDir = supportSubDir;
                return this;
            }

            /**
             * Sets the value of {@link IndexDocumentProperty#getSupportSubDir}
             * @param supportSubDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder supportSubDir(com.aliyun.ros.cdk.core.IResolvable supportSubDir) {
                this.supportSubDir = supportSubDir;
                return this;
            }

            /**
             * Sets the value of {@link IndexDocumentProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link IndexDocumentProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link IndexDocumentProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public IndexDocumentProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link IndexDocumentProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IndexDocumentProperty {
            private final java.lang.Object suffix;
            private final java.lang.Object supportSubDir;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.suffix = software.amazon.jsii.Kernel.get(this, "suffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.supportSubDir = software.amazon.jsii.Kernel.get(this, "supportSubDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.suffix = java.util.Objects.requireNonNull(builder.suffix, "suffix is required");
                this.supportSubDir = builder.supportSubDir;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getSuffix() {
                return this.suffix;
            }

            @Override
            public final java.lang.Object getSupportSubDir() {
                return this.supportSubDir;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("suffix", om.valueToTree(this.getSuffix()));
                if (this.getSupportSubDir() != null) {
                    data.set("supportSubDir", om.valueToTree(this.getSupportSubDir()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.IndexDocumentProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                IndexDocumentProperty.Jsii$Proxy that = (IndexDocumentProperty.Jsii$Proxy) o;

                if (!suffix.equals(that.suffix)) return false;
                if (this.supportSubDir != null ? !this.supportSubDir.equals(that.supportSubDir) : that.supportSubDir != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.suffix.hashCode();
                result = 31 * result + (this.supportSubDir != null ? this.supportSubDir.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.LifecycleConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(LifecycleConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LifecycleConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRule();

        /**
         * @return a {@link Builder} of {@link LifecycleConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LifecycleConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LifecycleConfigurationProperty> {
            java.lang.Object rule;

            /**
             * Sets the value of {@link LifecycleConfigurationProperty#getRule}
             * @param rule the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rule(com.aliyun.ros.cdk.core.IResolvable rule) {
                this.rule = rule;
                return this;
            }

            /**
             * Sets the value of {@link LifecycleConfigurationProperty#getRule}
             * @param rule the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rule(java.util.List<? extends java.lang.Object> rule) {
                this.rule = rule;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LifecycleConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LifecycleConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link LifecycleConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LifecycleConfigurationProperty {
            private final java.lang.Object rule;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.rule = software.amazon.jsii.Kernel.get(this, "rule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.rule = java.util.Objects.requireNonNull(builder.rule, "rule is required");
            }

            @Override
            public final java.lang.Object getRule() {
                return this.rule;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("rule", om.valueToTree(this.getRule()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.LifecycleConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LifecycleConfigurationProperty.Jsii$Proxy that = (LifecycleConfigurationProperty.Jsii$Proxy) o;

                return this.rule.equals(that.rule);
            }

            @Override
            public final int hashCode() {
                int result = this.rule.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.LoggingConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(LoggingConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LoggingConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTargetBucket() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTargetPrefix() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link LoggingConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LoggingConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LoggingConfigurationProperty> {
            java.lang.Object targetBucket;
            java.lang.Object targetPrefix;

            /**
             * Sets the value of {@link LoggingConfigurationProperty#getTargetBucket}
             * @param targetBucket the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetBucket(java.lang.String targetBucket) {
                this.targetBucket = targetBucket;
                return this;
            }

            /**
             * Sets the value of {@link LoggingConfigurationProperty#getTargetBucket}
             * @param targetBucket the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetBucket(com.aliyun.ros.cdk.core.IResolvable targetBucket) {
                this.targetBucket = targetBucket;
                return this;
            }

            /**
             * Sets the value of {@link LoggingConfigurationProperty#getTargetPrefix}
             * @param targetPrefix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetPrefix(java.lang.String targetPrefix) {
                this.targetPrefix = targetPrefix;
                return this;
            }

            /**
             * Sets the value of {@link LoggingConfigurationProperty#getTargetPrefix}
             * @param targetPrefix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetPrefix(com.aliyun.ros.cdk.core.IResolvable targetPrefix) {
                this.targetPrefix = targetPrefix;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LoggingConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LoggingConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link LoggingConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LoggingConfigurationProperty {
            private final java.lang.Object targetBucket;
            private final java.lang.Object targetPrefix;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.targetBucket = software.amazon.jsii.Kernel.get(this, "targetBucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.targetPrefix = software.amazon.jsii.Kernel.get(this, "targetPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.targetBucket = builder.targetBucket;
                this.targetPrefix = builder.targetPrefix;
            }

            @Override
            public final java.lang.Object getTargetBucket() {
                return this.targetBucket;
            }

            @Override
            public final java.lang.Object getTargetPrefix() {
                return this.targetPrefix;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getTargetBucket() != null) {
                    data.set("targetBucket", om.valueToTree(this.getTargetBucket()));
                }
                if (this.getTargetPrefix() != null) {
                    data.set("targetPrefix", om.valueToTree(this.getTargetPrefix()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.LoggingConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LoggingConfigurationProperty.Jsii$Proxy that = (LoggingConfigurationProperty.Jsii$Proxy) o;

                if (this.targetBucket != null ? !this.targetBucket.equals(that.targetBucket) : that.targetBucket != null) return false;
                return this.targetPrefix != null ? this.targetPrefix.equals(that.targetPrefix) : that.targetPrefix == null;
            }

            @Override
            public final int hashCode() {
                int result = this.targetBucket != null ? this.targetBucket.hashCode() : 0;
                result = 31 * result + (this.targetPrefix != null ? this.targetPrefix.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.MirrorHeadersProperty")
    @software.amazon.jsii.Jsii.Proxy(MirrorHeadersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MirrorHeadersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPass() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPassAll() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRemove() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSets() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MirrorHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MirrorHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MirrorHeadersProperty> {
            java.lang.Object pass;
            java.lang.Object passAll;
            java.lang.Object remove;
            java.lang.Object sets;

            /**
             * Sets the value of {@link MirrorHeadersProperty#getPass}
             * @param pass the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pass(com.aliyun.ros.cdk.core.IResolvable pass) {
                this.pass = pass;
                return this;
            }

            /**
             * Sets the value of {@link MirrorHeadersProperty#getPass}
             * @param pass the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pass(java.util.List<? extends java.lang.Object> pass) {
                this.pass = pass;
                return this;
            }

            /**
             * Sets the value of {@link MirrorHeadersProperty#getPassAll}
             * @param passAll the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder passAll(java.lang.Boolean passAll) {
                this.passAll = passAll;
                return this;
            }

            /**
             * Sets the value of {@link MirrorHeadersProperty#getPassAll}
             * @param passAll the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder passAll(com.aliyun.ros.cdk.core.IResolvable passAll) {
                this.passAll = passAll;
                return this;
            }

            /**
             * Sets the value of {@link MirrorHeadersProperty#getRemove}
             * @param remove the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder remove(com.aliyun.ros.cdk.core.IResolvable remove) {
                this.remove = remove;
                return this;
            }

            /**
             * Sets the value of {@link MirrorHeadersProperty#getRemove}
             * @param remove the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder remove(java.util.List<? extends java.lang.Object> remove) {
                this.remove = remove;
                return this;
            }

            /**
             * Sets the value of {@link MirrorHeadersProperty#getSets}
             * @param sets the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sets(com.aliyun.ros.cdk.core.IResolvable sets) {
                this.sets = sets;
                return this;
            }

            /**
             * Sets the value of {@link MirrorHeadersProperty#getSets}
             * @param sets the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sets(java.util.List<? extends java.lang.Object> sets) {
                this.sets = sets;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MirrorHeadersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MirrorHeadersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MirrorHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MirrorHeadersProperty {
            private final java.lang.Object pass;
            private final java.lang.Object passAll;
            private final java.lang.Object remove;
            private final java.lang.Object sets;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.pass = software.amazon.jsii.Kernel.get(this, "pass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.passAll = software.amazon.jsii.Kernel.get(this, "passAll", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.remove = software.amazon.jsii.Kernel.get(this, "remove", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sets = software.amazon.jsii.Kernel.get(this, "sets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.pass = builder.pass;
                this.passAll = builder.passAll;
                this.remove = builder.remove;
                this.sets = builder.sets;
            }

            @Override
            public final java.lang.Object getPass() {
                return this.pass;
            }

            @Override
            public final java.lang.Object getPassAll() {
                return this.passAll;
            }

            @Override
            public final java.lang.Object getRemove() {
                return this.remove;
            }

            @Override
            public final java.lang.Object getSets() {
                return this.sets;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getPass() != null) {
                    data.set("pass", om.valueToTree(this.getPass()));
                }
                if (this.getPassAll() != null) {
                    data.set("passAll", om.valueToTree(this.getPassAll()));
                }
                if (this.getRemove() != null) {
                    data.set("remove", om.valueToTree(this.getRemove()));
                }
                if (this.getSets() != null) {
                    data.set("sets", om.valueToTree(this.getSets()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.MirrorHeadersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MirrorHeadersProperty.Jsii$Proxy that = (MirrorHeadersProperty.Jsii$Proxy) o;

                if (this.pass != null ? !this.pass.equals(that.pass) : that.pass != null) return false;
                if (this.passAll != null ? !this.passAll.equals(that.passAll) : that.passAll != null) return false;
                if (this.remove != null ? !this.remove.equals(that.remove) : that.remove != null) return false;
                return this.sets != null ? this.sets.equals(that.sets) : that.sets == null;
            }

            @Override
            public final int hashCode() {
                int result = this.pass != null ? this.pass.hashCode() : 0;
                result = 31 * result + (this.passAll != null ? this.passAll.hashCode() : 0);
                result = 31 * result + (this.remove != null ? this.remove.hashCode() : 0);
                result = 31 * result + (this.sets != null ? this.sets.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.NotProperty")
    @software.amazon.jsii.Jsii.Proxy(NotProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NotProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPrefix() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTag() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NotProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NotProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NotProperty> {
            java.lang.Object prefix;
            java.lang.Object tag;

            /**
             * Sets the value of {@link NotProperty#getPrefix}
             * @param prefix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder prefix(java.lang.String prefix) {
                this.prefix = prefix;
                return this;
            }

            /**
             * Sets the value of {@link NotProperty#getPrefix}
             * @param prefix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder prefix(com.aliyun.ros.cdk.core.IResolvable prefix) {
                this.prefix = prefix;
                return this;
            }

            /**
             * Sets the value of {@link NotProperty#getTag}
             * @param tag the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tag(com.aliyun.ros.cdk.core.IResolvable tag) {
                this.tag = tag;
                return this;
            }

            /**
             * Sets the value of {@link NotProperty#getTag}
             * @param tag the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tag(java.util.List<? extends java.lang.Object> tag) {
                this.tag = tag;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NotProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NotProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NotProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NotProperty {
            private final java.lang.Object prefix;
            private final java.lang.Object tag;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.prefix = software.amazon.jsii.Kernel.get(this, "prefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tag = software.amazon.jsii.Kernel.get(this, "tag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.prefix = builder.prefix;
                this.tag = builder.tag;
            }

            @Override
            public final java.lang.Object getPrefix() {
                return this.prefix;
            }

            @Override
            public final java.lang.Object getTag() {
                return this.tag;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getPrefix() != null) {
                    data.set("prefix", om.valueToTree(this.getPrefix()));
                }
                if (this.getTag() != null) {
                    data.set("tag", om.valueToTree(this.getTag()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.NotProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NotProperty.Jsii$Proxy that = (NotProperty.Jsii$Proxy) o;

                if (this.prefix != null ? !this.prefix.equals(that.prefix) : that.prefix != null) return false;
                return this.tag != null ? this.tag.equals(that.tag) : that.tag == null;
            }

            @Override
            public final int hashCode() {
                int result = this.prefix != null ? this.prefix.hashCode() : 0;
                result = 31 * result + (this.tag != null ? this.tag.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.RedirectProperty")
    @software.amazon.jsii.Jsii.Proxy(RedirectProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RedirectProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRedirectType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableReplacePrefix() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHostName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpRedirectCode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMirrorCheckMd5() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMirrorFollowRedirect() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMirrorHeaders() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMirrorPassQueryString() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMirrorUrl() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPassQueryString() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProtocol() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReplaceKeyPrefixWith() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReplaceKeyWith() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RedirectProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RedirectProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RedirectProperty> {
            java.lang.Object redirectType;
            java.lang.Object enableReplacePrefix;
            java.lang.Object hostName;
            java.lang.Object httpRedirectCode;
            java.lang.Object mirrorCheckMd5;
            java.lang.Object mirrorFollowRedirect;
            java.lang.Object mirrorHeaders;
            java.lang.Object mirrorPassQueryString;
            java.lang.Object mirrorUrl;
            java.lang.Object passQueryString;
            java.lang.Object protocol;
            java.lang.Object replaceKeyPrefixWith;
            java.lang.Object replaceKeyWith;

            /**
             * Sets the value of {@link RedirectProperty#getRedirectType}
             * @param redirectType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redirectType(java.lang.String redirectType) {
                this.redirectType = redirectType;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getRedirectType}
             * @param redirectType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redirectType(com.aliyun.ros.cdk.core.IResolvable redirectType) {
                this.redirectType = redirectType;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getEnableReplacePrefix}
             * @param enableReplacePrefix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableReplacePrefix(java.lang.Boolean enableReplacePrefix) {
                this.enableReplacePrefix = enableReplacePrefix;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getEnableReplacePrefix}
             * @param enableReplacePrefix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableReplacePrefix(com.aliyun.ros.cdk.core.IResolvable enableReplacePrefix) {
                this.enableReplacePrefix = enableReplacePrefix;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getHostName}
             * @param hostName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostName(java.lang.String hostName) {
                this.hostName = hostName;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getHostName}
             * @param hostName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostName(com.aliyun.ros.cdk.core.IResolvable hostName) {
                this.hostName = hostName;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getHttpRedirectCode}
             * @param httpRedirectCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpRedirectCode(java.lang.String httpRedirectCode) {
                this.httpRedirectCode = httpRedirectCode;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getHttpRedirectCode}
             * @param httpRedirectCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpRedirectCode(com.aliyun.ros.cdk.core.IResolvable httpRedirectCode) {
                this.httpRedirectCode = httpRedirectCode;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorCheckMd5}
             * @param mirrorCheckMd5 the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorCheckMd5(java.lang.Boolean mirrorCheckMd5) {
                this.mirrorCheckMd5 = mirrorCheckMd5;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorCheckMd5}
             * @param mirrorCheckMd5 the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorCheckMd5(com.aliyun.ros.cdk.core.IResolvable mirrorCheckMd5) {
                this.mirrorCheckMd5 = mirrorCheckMd5;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorFollowRedirect}
             * @param mirrorFollowRedirect the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorFollowRedirect(java.lang.Boolean mirrorFollowRedirect) {
                this.mirrorFollowRedirect = mirrorFollowRedirect;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorFollowRedirect}
             * @param mirrorFollowRedirect the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorFollowRedirect(com.aliyun.ros.cdk.core.IResolvable mirrorFollowRedirect) {
                this.mirrorFollowRedirect = mirrorFollowRedirect;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorHeaders}
             * @param mirrorHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorHeaders(com.aliyun.ros.cdk.core.IResolvable mirrorHeaders) {
                this.mirrorHeaders = mirrorHeaders;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorHeaders}
             * @param mirrorHeaders the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorHeaders(com.aliyun.ros.cdk.oss.RosBucket.MirrorHeadersProperty mirrorHeaders) {
                this.mirrorHeaders = mirrorHeaders;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorPassQueryString}
             * @param mirrorPassQueryString the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorPassQueryString(java.lang.Boolean mirrorPassQueryString) {
                this.mirrorPassQueryString = mirrorPassQueryString;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorPassQueryString}
             * @param mirrorPassQueryString the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorPassQueryString(com.aliyun.ros.cdk.core.IResolvable mirrorPassQueryString) {
                this.mirrorPassQueryString = mirrorPassQueryString;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorUrl}
             * @param mirrorUrl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorUrl(java.lang.String mirrorUrl) {
                this.mirrorUrl = mirrorUrl;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getMirrorUrl}
             * @param mirrorUrl the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mirrorUrl(com.aliyun.ros.cdk.core.IResolvable mirrorUrl) {
                this.mirrorUrl = mirrorUrl;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getPassQueryString}
             * @param passQueryString the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder passQueryString(java.lang.Boolean passQueryString) {
                this.passQueryString = passQueryString;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getPassQueryString}
             * @param passQueryString the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder passQueryString(com.aliyun.ros.cdk.core.IResolvable passQueryString) {
                this.passQueryString = passQueryString;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getProtocol}
             * @param protocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(java.lang.String protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getProtocol}
             * @param protocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getReplaceKeyPrefixWith}
             * @param replaceKeyPrefixWith the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replaceKeyPrefixWith(java.lang.String replaceKeyPrefixWith) {
                this.replaceKeyPrefixWith = replaceKeyPrefixWith;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getReplaceKeyPrefixWith}
             * @param replaceKeyPrefixWith the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replaceKeyPrefixWith(com.aliyun.ros.cdk.core.IResolvable replaceKeyPrefixWith) {
                this.replaceKeyPrefixWith = replaceKeyPrefixWith;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getReplaceKeyWith}
             * @param replaceKeyWith the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replaceKeyWith(java.lang.String replaceKeyWith) {
                this.replaceKeyWith = replaceKeyWith;
                return this;
            }

            /**
             * Sets the value of {@link RedirectProperty#getReplaceKeyWith}
             * @param replaceKeyWith the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replaceKeyWith(com.aliyun.ros.cdk.core.IResolvable replaceKeyWith) {
                this.replaceKeyWith = replaceKeyWith;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RedirectProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RedirectProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RedirectProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RedirectProperty {
            private final java.lang.Object redirectType;
            private final java.lang.Object enableReplacePrefix;
            private final java.lang.Object hostName;
            private final java.lang.Object httpRedirectCode;
            private final java.lang.Object mirrorCheckMd5;
            private final java.lang.Object mirrorFollowRedirect;
            private final java.lang.Object mirrorHeaders;
            private final java.lang.Object mirrorPassQueryString;
            private final java.lang.Object mirrorUrl;
            private final java.lang.Object passQueryString;
            private final java.lang.Object protocol;
            private final java.lang.Object replaceKeyPrefixWith;
            private final java.lang.Object replaceKeyWith;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.redirectType = software.amazon.jsii.Kernel.get(this, "redirectType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableReplacePrefix = software.amazon.jsii.Kernel.get(this, "enableReplacePrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostName = software.amazon.jsii.Kernel.get(this, "hostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpRedirectCode = software.amazon.jsii.Kernel.get(this, "httpRedirectCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mirrorCheckMd5 = software.amazon.jsii.Kernel.get(this, "mirrorCheckMd5", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mirrorFollowRedirect = software.amazon.jsii.Kernel.get(this, "mirrorFollowRedirect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mirrorHeaders = software.amazon.jsii.Kernel.get(this, "mirrorHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mirrorPassQueryString = software.amazon.jsii.Kernel.get(this, "mirrorPassQueryString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mirrorUrl = software.amazon.jsii.Kernel.get(this, "mirrorUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.passQueryString = software.amazon.jsii.Kernel.get(this, "passQueryString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.replaceKeyPrefixWith = software.amazon.jsii.Kernel.get(this, "replaceKeyPrefixWith", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.replaceKeyWith = software.amazon.jsii.Kernel.get(this, "replaceKeyWith", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.redirectType = java.util.Objects.requireNonNull(builder.redirectType, "redirectType is required");
                this.enableReplacePrefix = builder.enableReplacePrefix;
                this.hostName = builder.hostName;
                this.httpRedirectCode = builder.httpRedirectCode;
                this.mirrorCheckMd5 = builder.mirrorCheckMd5;
                this.mirrorFollowRedirect = builder.mirrorFollowRedirect;
                this.mirrorHeaders = builder.mirrorHeaders;
                this.mirrorPassQueryString = builder.mirrorPassQueryString;
                this.mirrorUrl = builder.mirrorUrl;
                this.passQueryString = builder.passQueryString;
                this.protocol = builder.protocol;
                this.replaceKeyPrefixWith = builder.replaceKeyPrefixWith;
                this.replaceKeyWith = builder.replaceKeyWith;
            }

            @Override
            public final java.lang.Object getRedirectType() {
                return this.redirectType;
            }

            @Override
            public final java.lang.Object getEnableReplacePrefix() {
                return this.enableReplacePrefix;
            }

            @Override
            public final java.lang.Object getHostName() {
                return this.hostName;
            }

            @Override
            public final java.lang.Object getHttpRedirectCode() {
                return this.httpRedirectCode;
            }

            @Override
            public final java.lang.Object getMirrorCheckMd5() {
                return this.mirrorCheckMd5;
            }

            @Override
            public final java.lang.Object getMirrorFollowRedirect() {
                return this.mirrorFollowRedirect;
            }

            @Override
            public final java.lang.Object getMirrorHeaders() {
                return this.mirrorHeaders;
            }

            @Override
            public final java.lang.Object getMirrorPassQueryString() {
                return this.mirrorPassQueryString;
            }

            @Override
            public final java.lang.Object getMirrorUrl() {
                return this.mirrorUrl;
            }

            @Override
            public final java.lang.Object getPassQueryString() {
                return this.passQueryString;
            }

            @Override
            public final java.lang.Object getProtocol() {
                return this.protocol;
            }

            @Override
            public final java.lang.Object getReplaceKeyPrefixWith() {
                return this.replaceKeyPrefixWith;
            }

            @Override
            public final java.lang.Object getReplaceKeyWith() {
                return this.replaceKeyWith;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("redirectType", om.valueToTree(this.getRedirectType()));
                if (this.getEnableReplacePrefix() != null) {
                    data.set("enableReplacePrefix", om.valueToTree(this.getEnableReplacePrefix()));
                }
                if (this.getHostName() != null) {
                    data.set("hostName", om.valueToTree(this.getHostName()));
                }
                if (this.getHttpRedirectCode() != null) {
                    data.set("httpRedirectCode", om.valueToTree(this.getHttpRedirectCode()));
                }
                if (this.getMirrorCheckMd5() != null) {
                    data.set("mirrorCheckMd5", om.valueToTree(this.getMirrorCheckMd5()));
                }
                if (this.getMirrorFollowRedirect() != null) {
                    data.set("mirrorFollowRedirect", om.valueToTree(this.getMirrorFollowRedirect()));
                }
                if (this.getMirrorHeaders() != null) {
                    data.set("mirrorHeaders", om.valueToTree(this.getMirrorHeaders()));
                }
                if (this.getMirrorPassQueryString() != null) {
                    data.set("mirrorPassQueryString", om.valueToTree(this.getMirrorPassQueryString()));
                }
                if (this.getMirrorUrl() != null) {
                    data.set("mirrorUrl", om.valueToTree(this.getMirrorUrl()));
                }
                if (this.getPassQueryString() != null) {
                    data.set("passQueryString", om.valueToTree(this.getPassQueryString()));
                }
                if (this.getProtocol() != null) {
                    data.set("protocol", om.valueToTree(this.getProtocol()));
                }
                if (this.getReplaceKeyPrefixWith() != null) {
                    data.set("replaceKeyPrefixWith", om.valueToTree(this.getReplaceKeyPrefixWith()));
                }
                if (this.getReplaceKeyWith() != null) {
                    data.set("replaceKeyWith", om.valueToTree(this.getReplaceKeyWith()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.RedirectProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RedirectProperty.Jsii$Proxy that = (RedirectProperty.Jsii$Proxy) o;

                if (!redirectType.equals(that.redirectType)) return false;
                if (this.enableReplacePrefix != null ? !this.enableReplacePrefix.equals(that.enableReplacePrefix) : that.enableReplacePrefix != null) return false;
                if (this.hostName != null ? !this.hostName.equals(that.hostName) : that.hostName != null) return false;
                if (this.httpRedirectCode != null ? !this.httpRedirectCode.equals(that.httpRedirectCode) : that.httpRedirectCode != null) return false;
                if (this.mirrorCheckMd5 != null ? !this.mirrorCheckMd5.equals(that.mirrorCheckMd5) : that.mirrorCheckMd5 != null) return false;
                if (this.mirrorFollowRedirect != null ? !this.mirrorFollowRedirect.equals(that.mirrorFollowRedirect) : that.mirrorFollowRedirect != null) return false;
                if (this.mirrorHeaders != null ? !this.mirrorHeaders.equals(that.mirrorHeaders) : that.mirrorHeaders != null) return false;
                if (this.mirrorPassQueryString != null ? !this.mirrorPassQueryString.equals(that.mirrorPassQueryString) : that.mirrorPassQueryString != null) return false;
                if (this.mirrorUrl != null ? !this.mirrorUrl.equals(that.mirrorUrl) : that.mirrorUrl != null) return false;
                if (this.passQueryString != null ? !this.passQueryString.equals(that.passQueryString) : that.passQueryString != null) return false;
                if (this.protocol != null ? !this.protocol.equals(that.protocol) : that.protocol != null) return false;
                if (this.replaceKeyPrefixWith != null ? !this.replaceKeyPrefixWith.equals(that.replaceKeyPrefixWith) : that.replaceKeyPrefixWith != null) return false;
                return this.replaceKeyWith != null ? this.replaceKeyWith.equals(that.replaceKeyWith) : that.replaceKeyWith == null;
            }

            @Override
            public final int hashCode() {
                int result = this.redirectType.hashCode();
                result = 31 * result + (this.enableReplacePrefix != null ? this.enableReplacePrefix.hashCode() : 0);
                result = 31 * result + (this.hostName != null ? this.hostName.hashCode() : 0);
                result = 31 * result + (this.httpRedirectCode != null ? this.httpRedirectCode.hashCode() : 0);
                result = 31 * result + (this.mirrorCheckMd5 != null ? this.mirrorCheckMd5.hashCode() : 0);
                result = 31 * result + (this.mirrorFollowRedirect != null ? this.mirrorFollowRedirect.hashCode() : 0);
                result = 31 * result + (this.mirrorHeaders != null ? this.mirrorHeaders.hashCode() : 0);
                result = 31 * result + (this.mirrorPassQueryString != null ? this.mirrorPassQueryString.hashCode() : 0);
                result = 31 * result + (this.mirrorUrl != null ? this.mirrorUrl.hashCode() : 0);
                result = 31 * result + (this.passQueryString != null ? this.passQueryString.hashCode() : 0);
                result = 31 * result + (this.protocol != null ? this.protocol.hashCode() : 0);
                result = 31 * result + (this.replaceKeyPrefixWith != null ? this.replaceKeyPrefixWith.hashCode() : 0);
                result = 31 * result + (this.replaceKeyWith != null ? this.replaceKeyWith.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.RefererConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(RefererConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RefererConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAllowEmptyReferer() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRefererList() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RefererConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RefererConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RefererConfigurationProperty> {
            java.lang.Object allowEmptyReferer;
            java.lang.Object refererList;

            /**
             * Sets the value of {@link RefererConfigurationProperty#getAllowEmptyReferer}
             * @param allowEmptyReferer the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowEmptyReferer(java.lang.Boolean allowEmptyReferer) {
                this.allowEmptyReferer = allowEmptyReferer;
                return this;
            }

            /**
             * Sets the value of {@link RefererConfigurationProperty#getAllowEmptyReferer}
             * @param allowEmptyReferer the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowEmptyReferer(com.aliyun.ros.cdk.core.IResolvable allowEmptyReferer) {
                this.allowEmptyReferer = allowEmptyReferer;
                return this;
            }

            /**
             * Sets the value of {@link RefererConfigurationProperty#getRefererList}
             * @param refererList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder refererList(java.util.List<? extends java.lang.Object> refererList) {
                this.refererList = refererList;
                return this;
            }

            /**
             * Sets the value of {@link RefererConfigurationProperty#getRefererList}
             * @param refererList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder refererList(com.aliyun.ros.cdk.core.IResolvable refererList) {
                this.refererList = refererList;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RefererConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RefererConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RefererConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RefererConfigurationProperty {
            private final java.lang.Object allowEmptyReferer;
            private final java.lang.Object refererList;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.allowEmptyReferer = software.amazon.jsii.Kernel.get(this, "allowEmptyReferer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.refererList = software.amazon.jsii.Kernel.get(this, "refererList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.allowEmptyReferer = builder.allowEmptyReferer;
                this.refererList = builder.refererList;
            }

            @Override
            public final java.lang.Object getAllowEmptyReferer() {
                return this.allowEmptyReferer;
            }

            @Override
            public final java.lang.Object getRefererList() {
                return this.refererList;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAllowEmptyReferer() != null) {
                    data.set("allowEmptyReferer", om.valueToTree(this.getAllowEmptyReferer()));
                }
                if (this.getRefererList() != null) {
                    data.set("refererList", om.valueToTree(this.getRefererList()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.RefererConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RefererConfigurationProperty.Jsii$Proxy that = (RefererConfigurationProperty.Jsii$Proxy) o;

                if (this.allowEmptyReferer != null ? !this.allowEmptyReferer.equals(that.allowEmptyReferer) : that.allowEmptyReferer != null) return false;
                return this.refererList != null ? this.refererList.equals(that.refererList) : that.refererList == null;
            }

            @Override
            public final int hashCode() {
                int result = this.allowEmptyReferer != null ? this.allowEmptyReferer.hashCode() : 0;
                result = 31 * result + (this.refererList != null ? this.refererList.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.RoutingRulesProperty")
    @software.amazon.jsii.Jsii.Proxy(RoutingRulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RoutingRulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCondition();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRedirect();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRuleNumber();

        /**
         * @return a {@link Builder} of {@link RoutingRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RoutingRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RoutingRulesProperty> {
            java.lang.Object condition;
            java.lang.Object redirect;
            java.lang.Object ruleNumber;

            /**
             * Sets the value of {@link RoutingRulesProperty#getCondition}
             * @param condition the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder condition(com.aliyun.ros.cdk.core.IResolvable condition) {
                this.condition = condition;
                return this;
            }

            /**
             * Sets the value of {@link RoutingRulesProperty#getCondition}
             * @param condition the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder condition(com.aliyun.ros.cdk.oss.RosBucket.ConditionProperty condition) {
                this.condition = condition;
                return this;
            }

            /**
             * Sets the value of {@link RoutingRulesProperty#getRedirect}
             * @param redirect the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redirect(com.aliyun.ros.cdk.core.IResolvable redirect) {
                this.redirect = redirect;
                return this;
            }

            /**
             * Sets the value of {@link RoutingRulesProperty#getRedirect}
             * @param redirect the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder redirect(com.aliyun.ros.cdk.oss.RosBucket.RedirectProperty redirect) {
                this.redirect = redirect;
                return this;
            }

            /**
             * Sets the value of {@link RoutingRulesProperty#getRuleNumber}
             * @param ruleNumber the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleNumber(java.lang.Number ruleNumber) {
                this.ruleNumber = ruleNumber;
                return this;
            }

            /**
             * Sets the value of {@link RoutingRulesProperty#getRuleNumber}
             * @param ruleNumber the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ruleNumber(com.aliyun.ros.cdk.core.IResolvable ruleNumber) {
                this.ruleNumber = ruleNumber;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RoutingRulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RoutingRulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RoutingRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RoutingRulesProperty {
            private final java.lang.Object condition;
            private final java.lang.Object redirect;
            private final java.lang.Object ruleNumber;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.condition = software.amazon.jsii.Kernel.get(this, "condition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.redirect = software.amazon.jsii.Kernel.get(this, "redirect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ruleNumber = software.amazon.jsii.Kernel.get(this, "ruleNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.condition = java.util.Objects.requireNonNull(builder.condition, "condition is required");
                this.redirect = java.util.Objects.requireNonNull(builder.redirect, "redirect is required");
                this.ruleNumber = java.util.Objects.requireNonNull(builder.ruleNumber, "ruleNumber is required");
            }

            @Override
            public final java.lang.Object getCondition() {
                return this.condition;
            }

            @Override
            public final java.lang.Object getRedirect() {
                return this.redirect;
            }

            @Override
            public final java.lang.Object getRuleNumber() {
                return this.ruleNumber;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("condition", om.valueToTree(this.getCondition()));
                data.set("redirect", om.valueToTree(this.getRedirect()));
                data.set("ruleNumber", om.valueToTree(this.getRuleNumber()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.RoutingRulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RoutingRulesProperty.Jsii$Proxy that = (RoutingRulesProperty.Jsii$Proxy) o;

                if (!condition.equals(that.condition)) return false;
                if (!redirect.equals(that.redirect)) return false;
                return this.ruleNumber.equals(that.ruleNumber);
            }

            @Override
            public final int hashCode() {
                int result = this.condition.hashCode();
                result = 31 * result + (this.redirect.hashCode());
                result = 31 * result + (this.ruleNumber.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.RuleProperty")
    @software.amazon.jsii.Jsii.Proxy(RuleProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RuleProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPrefix();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAbortMultipartUpload() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExpiration() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFilter() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RuleProperty> {
            java.lang.Object prefix;
            java.lang.Object abortMultipartUpload;
            java.lang.Object expiration;
            java.lang.Object filter;
            java.lang.Object id;
            java.lang.Object status;

            /**
             * Sets the value of {@link RuleProperty#getPrefix}
             * @param prefix the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder prefix(java.lang.String prefix) {
                this.prefix = prefix;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getPrefix}
             * @param prefix the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder prefix(com.aliyun.ros.cdk.core.IResolvable prefix) {
                this.prefix = prefix;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getAbortMultipartUpload}
             * @param abortMultipartUpload the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder abortMultipartUpload(com.aliyun.ros.cdk.core.IResolvable abortMultipartUpload) {
                this.abortMultipartUpload = abortMultipartUpload;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getAbortMultipartUpload}
             * @param abortMultipartUpload the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder abortMultipartUpload(com.aliyun.ros.cdk.oss.RosBucket.AbortMultipartUploadProperty abortMultipartUpload) {
                this.abortMultipartUpload = abortMultipartUpload;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getExpiration}
             * @param expiration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder expiration(com.aliyun.ros.cdk.core.IResolvable expiration) {
                this.expiration = expiration;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getExpiration}
             * @param expiration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder expiration(com.aliyun.ros.cdk.oss.RosBucket.ExpirationProperty expiration) {
                this.expiration = expiration;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getFilter}
             * @param filter the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder filter(com.aliyun.ros.cdk.core.IResolvable filter) {
                this.filter = filter;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getFilter}
             * @param filter the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder filter(com.aliyun.ros.cdk.oss.RosBucket.FilterProperty filter) {
                this.filter = filter;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getId}
             * @param id the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder id(java.lang.String id) {
                this.id = id;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getId}
             * @param id the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder id(com.aliyun.ros.cdk.core.IResolvable id) {
                this.id = id;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getStatus}
             * @param status the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder status(java.lang.String status) {
                this.status = status;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getStatus}
             * @param status the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
                this.status = status;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RuleProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RuleProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RuleProperty {
            private final java.lang.Object prefix;
            private final java.lang.Object abortMultipartUpload;
            private final java.lang.Object expiration;
            private final java.lang.Object filter;
            private final java.lang.Object id;
            private final java.lang.Object status;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.prefix = software.amazon.jsii.Kernel.get(this, "prefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.abortMultipartUpload = software.amazon.jsii.Kernel.get(this, "abortMultipartUpload", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.expiration = software.amazon.jsii.Kernel.get(this, "expiration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.filter = software.amazon.jsii.Kernel.get(this, "filter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.id = software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.prefix = java.util.Objects.requireNonNull(builder.prefix, "prefix is required");
                this.abortMultipartUpload = builder.abortMultipartUpload;
                this.expiration = builder.expiration;
                this.filter = builder.filter;
                this.id = builder.id;
                this.status = builder.status;
            }

            @Override
            public final java.lang.Object getPrefix() {
                return this.prefix;
            }

            @Override
            public final java.lang.Object getAbortMultipartUpload() {
                return this.abortMultipartUpload;
            }

            @Override
            public final java.lang.Object getExpiration() {
                return this.expiration;
            }

            @Override
            public final java.lang.Object getFilter() {
                return this.filter;
            }

            @Override
            public final java.lang.Object getId() {
                return this.id;
            }

            @Override
            public final java.lang.Object getStatus() {
                return this.status;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("prefix", om.valueToTree(this.getPrefix()));
                if (this.getAbortMultipartUpload() != null) {
                    data.set("abortMultipartUpload", om.valueToTree(this.getAbortMultipartUpload()));
                }
                if (this.getExpiration() != null) {
                    data.set("expiration", om.valueToTree(this.getExpiration()));
                }
                if (this.getFilter() != null) {
                    data.set("filter", om.valueToTree(this.getFilter()));
                }
                if (this.getId() != null) {
                    data.set("id", om.valueToTree(this.getId()));
                }
                if (this.getStatus() != null) {
                    data.set("status", om.valueToTree(this.getStatus()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.RuleProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RuleProperty.Jsii$Proxy that = (RuleProperty.Jsii$Proxy) o;

                if (!prefix.equals(that.prefix)) return false;
                if (this.abortMultipartUpload != null ? !this.abortMultipartUpload.equals(that.abortMultipartUpload) : that.abortMultipartUpload != null) return false;
                if (this.expiration != null ? !this.expiration.equals(that.expiration) : that.expiration != null) return false;
                if (this.filter != null ? !this.filter.equals(that.filter) : that.filter != null) return false;
                if (this.id != null ? !this.id.equals(that.id) : that.id != null) return false;
                return this.status != null ? this.status.equals(that.status) : that.status == null;
            }

            @Override
            public final int hashCode() {
                int result = this.prefix.hashCode();
                result = 31 * result + (this.abortMultipartUpload != null ? this.abortMultipartUpload.hashCode() : 0);
                result = 31 * result + (this.expiration != null ? this.expiration.hashCode() : 0);
                result = 31 * result + (this.filter != null ? this.filter.hashCode() : 0);
                result = 31 * result + (this.id != null ? this.id.hashCode() : 0);
                result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.ServerSideEncryptionConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(ServerSideEncryptionConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ServerSideEncryptionConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSseAlgorithm();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKmsMasterKeyId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ServerSideEncryptionConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ServerSideEncryptionConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ServerSideEncryptionConfigurationProperty> {
            java.lang.Object sseAlgorithm;
            java.lang.Object kmsMasterKeyId;

            /**
             * Sets the value of {@link ServerSideEncryptionConfigurationProperty#getSseAlgorithm}
             * @param sseAlgorithm the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sseAlgorithm(java.lang.String sseAlgorithm) {
                this.sseAlgorithm = sseAlgorithm;
                return this;
            }

            /**
             * Sets the value of {@link ServerSideEncryptionConfigurationProperty#getSseAlgorithm}
             * @param sseAlgorithm the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sseAlgorithm(com.aliyun.ros.cdk.core.IResolvable sseAlgorithm) {
                this.sseAlgorithm = sseAlgorithm;
                return this;
            }

            /**
             * Sets the value of {@link ServerSideEncryptionConfigurationProperty#getKmsMasterKeyId}
             * @param kmsMasterKeyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder kmsMasterKeyId(java.lang.String kmsMasterKeyId) {
                this.kmsMasterKeyId = kmsMasterKeyId;
                return this;
            }

            /**
             * Sets the value of {@link ServerSideEncryptionConfigurationProperty#getKmsMasterKeyId}
             * @param kmsMasterKeyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder kmsMasterKeyId(com.aliyun.ros.cdk.core.IResolvable kmsMasterKeyId) {
                this.kmsMasterKeyId = kmsMasterKeyId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ServerSideEncryptionConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ServerSideEncryptionConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ServerSideEncryptionConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServerSideEncryptionConfigurationProperty {
            private final java.lang.Object sseAlgorithm;
            private final java.lang.Object kmsMasterKeyId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.sseAlgorithm = software.amazon.jsii.Kernel.get(this, "sseAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.kmsMasterKeyId = software.amazon.jsii.Kernel.get(this, "kmsMasterKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.sseAlgorithm = java.util.Objects.requireNonNull(builder.sseAlgorithm, "sseAlgorithm is required");
                this.kmsMasterKeyId = builder.kmsMasterKeyId;
            }

            @Override
            public final java.lang.Object getSseAlgorithm() {
                return this.sseAlgorithm;
            }

            @Override
            public final java.lang.Object getKmsMasterKeyId() {
                return this.kmsMasterKeyId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("sseAlgorithm", om.valueToTree(this.getSseAlgorithm()));
                if (this.getKmsMasterKeyId() != null) {
                    data.set("kmsMasterKeyId", om.valueToTree(this.getKmsMasterKeyId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.ServerSideEncryptionConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ServerSideEncryptionConfigurationProperty.Jsii$Proxy that = (ServerSideEncryptionConfigurationProperty.Jsii$Proxy) o;

                if (!sseAlgorithm.equals(that.sseAlgorithm)) return false;
                return this.kmsMasterKeyId != null ? this.kmsMasterKeyId.equals(that.kmsMasterKeyId) : that.kmsMasterKeyId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.sseAlgorithm.hashCode();
                result = 31 * result + (this.kmsMasterKeyId != null ? this.kmsMasterKeyId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.SetsProperty")
    @software.amazon.jsii.Jsii.Proxy(SetsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SetsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getValue();

        /**
         * @return a {@link Builder} of {@link SetsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SetsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SetsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link SetsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link SetsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link SetsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link SetsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SetsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SetsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SetsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SetsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = java.util.Objects.requireNonNull(builder.value, "value is required");
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                data.set("value", om.valueToTree(this.getValue()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.SetsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SetsProperty.Jsii$Proxy that = (SetsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value.equals(that.value);
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.VersioningConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(VersioningConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface VersioningConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getStatus();

        /**
         * @return a {@link Builder} of {@link VersioningConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link VersioningConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<VersioningConfigurationProperty> {
            java.lang.Object status;

            /**
             * Sets the value of {@link VersioningConfigurationProperty#getStatus}
             * @param status the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder status(java.lang.String status) {
                this.status = status;
                return this;
            }

            /**
             * Sets the value of {@link VersioningConfigurationProperty#getStatus}
             * @param status the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
                this.status = status;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link VersioningConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public VersioningConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link VersioningConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VersioningConfigurationProperty {
            private final java.lang.Object status;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.status = java.util.Objects.requireNonNull(builder.status, "status is required");
            }

            @Override
            public final java.lang.Object getStatus() {
                return this.status;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("status", om.valueToTree(this.getStatus()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.VersioningConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                VersioningConfigurationProperty.Jsii$Proxy that = (VersioningConfigurationProperty.Jsii$Proxy) o;

                return this.status.equals(that.status);
            }

            @Override
            public final int hashCode() {
                int result = this.status.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucket.WebsiteConfigurationV2Property")
    @software.amazon.jsii.Jsii.Proxy(WebsiteConfigurationV2Property.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface WebsiteConfigurationV2Property extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getErrorDocument() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIndexDocument() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRoutingRules() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link WebsiteConfigurationV2Property}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link WebsiteConfigurationV2Property}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<WebsiteConfigurationV2Property> {
            java.lang.Object errorDocument;
            java.lang.Object indexDocument;
            java.lang.Object routingRules;

            /**
             * Sets the value of {@link WebsiteConfigurationV2Property#getErrorDocument}
             * @param errorDocument the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder errorDocument(com.aliyun.ros.cdk.core.IResolvable errorDocument) {
                this.errorDocument = errorDocument;
                return this;
            }

            /**
             * Sets the value of {@link WebsiteConfigurationV2Property#getErrorDocument}
             * @param errorDocument the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder errorDocument(com.aliyun.ros.cdk.oss.RosBucket.ErrorDocumentProperty errorDocument) {
                this.errorDocument = errorDocument;
                return this;
            }

            /**
             * Sets the value of {@link WebsiteConfigurationV2Property#getIndexDocument}
             * @param indexDocument the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder indexDocument(com.aliyun.ros.cdk.core.IResolvable indexDocument) {
                this.indexDocument = indexDocument;
                return this;
            }

            /**
             * Sets the value of {@link WebsiteConfigurationV2Property#getIndexDocument}
             * @param indexDocument the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder indexDocument(com.aliyun.ros.cdk.oss.RosBucket.IndexDocumentProperty indexDocument) {
                this.indexDocument = indexDocument;
                return this;
            }

            /**
             * Sets the value of {@link WebsiteConfigurationV2Property#getRoutingRules}
             * @param routingRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routingRules(com.aliyun.ros.cdk.core.IResolvable routingRules) {
                this.routingRules = routingRules;
                return this;
            }

            /**
             * Sets the value of {@link WebsiteConfigurationV2Property#getRoutingRules}
             * @param routingRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder routingRules(java.util.List<? extends java.lang.Object> routingRules) {
                this.routingRules = routingRules;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link WebsiteConfigurationV2Property}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public WebsiteConfigurationV2Property build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link WebsiteConfigurationV2Property}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WebsiteConfigurationV2Property {
            private final java.lang.Object errorDocument;
            private final java.lang.Object indexDocument;
            private final java.lang.Object routingRules;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.errorDocument = software.amazon.jsii.Kernel.get(this, "errorDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.indexDocument = software.amazon.jsii.Kernel.get(this, "indexDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.routingRules = software.amazon.jsii.Kernel.get(this, "routingRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.errorDocument = builder.errorDocument;
                this.indexDocument = builder.indexDocument;
                this.routingRules = builder.routingRules;
            }

            @Override
            public final java.lang.Object getErrorDocument() {
                return this.errorDocument;
            }

            @Override
            public final java.lang.Object getIndexDocument() {
                return this.indexDocument;
            }

            @Override
            public final java.lang.Object getRoutingRules() {
                return this.routingRules;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getErrorDocument() != null) {
                    data.set("errorDocument", om.valueToTree(this.getErrorDocument()));
                }
                if (this.getIndexDocument() != null) {
                    data.set("indexDocument", om.valueToTree(this.getIndexDocument()));
                }
                if (this.getRoutingRules() != null) {
                    data.set("routingRules", om.valueToTree(this.getRoutingRules()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucket.WebsiteConfigurationV2Property"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                WebsiteConfigurationV2Property.Jsii$Proxy that = (WebsiteConfigurationV2Property.Jsii$Proxy) o;

                if (this.errorDocument != null ? !this.errorDocument.equals(that.errorDocument) : that.errorDocument != null) return false;
                if (this.indexDocument != null ? !this.indexDocument.equals(that.indexDocument) : that.indexDocument != null) return false;
                return this.routingRules != null ? this.routingRules.equals(that.routingRules) : that.routingRules == null;
            }

            @Override
            public final int hashCode() {
                int result = this.errorDocument != null ? this.errorDocument.hashCode() : 0;
                result = 31 * result + (this.indexDocument != null ? this.indexDocument.hashCode() : 0);
                result = 31 * result + (this.routingRules != null ? this.routingRules.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.oss.RosBucket}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oss.RosBucket> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.oss.RosBucketProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.oss.RosBucketProps.Builder();
        }

        /**
         * @return {@code this}
         * @param bucketName This parameter is required.
         */
        public Builder bucketName(final java.lang.String bucketName) {
            this.props.bucketName(bucketName);
            return this;
        }
        /**
         * @return {@code this}
         * @param bucketName This parameter is required.
         */
        public Builder bucketName(final com.aliyun.ros.cdk.core.IResolvable bucketName) {
            this.props.bucketName(bucketName);
            return this;
        }

        /**
         * @return {@code this}
         * @param accessControl This parameter is required.
         */
        public Builder accessControl(final java.lang.String accessControl) {
            this.props.accessControl(accessControl);
            return this;
        }
        /**
         * @return {@code this}
         * @param accessControl This parameter is required.
         */
        public Builder accessControl(final com.aliyun.ros.cdk.core.IResolvable accessControl) {
            this.props.accessControl(accessControl);
            return this;
        }

        /**
         * @return {@code this}
         * @param corsConfiguration This parameter is required.
         */
        public Builder corsConfiguration(final com.aliyun.ros.cdk.core.IResolvable corsConfiguration) {
            this.props.corsConfiguration(corsConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param corsConfiguration This parameter is required.
         */
        public Builder corsConfiguration(final com.aliyun.ros.cdk.oss.RosBucket.CORSConfigurationProperty corsConfiguration) {
            this.props.corsConfiguration(corsConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableOssHdfsService This parameter is required.
         */
        public Builder enableOssHdfsService(final java.lang.Boolean enableOssHdfsService) {
            this.props.enableOssHdfsService(enableOssHdfsService);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableOssHdfsService This parameter is required.
         */
        public Builder enableOssHdfsService(final com.aliyun.ros.cdk.core.IResolvable enableOssHdfsService) {
            this.props.enableOssHdfsService(enableOssHdfsService);
            return this;
        }

        /**
         * @return {@code this}
         * @param lifecycleConfiguration This parameter is required.
         */
        public Builder lifecycleConfiguration(final com.aliyun.ros.cdk.core.IResolvable lifecycleConfiguration) {
            this.props.lifecycleConfiguration(lifecycleConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param lifecycleConfiguration This parameter is required.
         */
        public Builder lifecycleConfiguration(final com.aliyun.ros.cdk.oss.RosBucket.LifecycleConfigurationProperty lifecycleConfiguration) {
            this.props.lifecycleConfiguration(lifecycleConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param loggingConfiguration This parameter is required.
         */
        public Builder loggingConfiguration(final com.aliyun.ros.cdk.core.IResolvable loggingConfiguration) {
            this.props.loggingConfiguration(loggingConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param loggingConfiguration This parameter is required.
         */
        public Builder loggingConfiguration(final com.aliyun.ros.cdk.oss.RosBucket.LoggingConfigurationProperty loggingConfiguration) {
            this.props.loggingConfiguration(loggingConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param policy This parameter is required.
         */
        public Builder policy(final com.aliyun.ros.cdk.core.IResolvable policy) {
            this.props.policy(policy);
            return this;
        }
        /**
         * @return {@code this}
         * @param policy This parameter is required.
         */
        public Builder policy(final java.util.Map<java.lang.String, ? extends java.lang.Object> policy) {
            this.props.policy(policy);
            return this;
        }

        /**
         * @return {@code this}
         * @param redundancyType This parameter is required.
         */
        public Builder redundancyType(final java.lang.String redundancyType) {
            this.props.redundancyType(redundancyType);
            return this;
        }
        /**
         * @return {@code this}
         * @param redundancyType This parameter is required.
         */
        public Builder redundancyType(final com.aliyun.ros.cdk.core.IResolvable redundancyType) {
            this.props.redundancyType(redundancyType);
            return this;
        }

        /**
         * @return {@code this}
         * @param refererConfiguration This parameter is required.
         */
        public Builder refererConfiguration(final com.aliyun.ros.cdk.core.IResolvable refererConfiguration) {
            this.props.refererConfiguration(refererConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param refererConfiguration This parameter is required.
         */
        public Builder refererConfiguration(final com.aliyun.ros.cdk.oss.RosBucket.RefererConfigurationProperty refererConfiguration) {
            this.props.refererConfiguration(refererConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param serverSideEncryptionConfiguration This parameter is required.
         */
        public Builder serverSideEncryptionConfiguration(final com.aliyun.ros.cdk.core.IResolvable serverSideEncryptionConfiguration) {
            this.props.serverSideEncryptionConfiguration(serverSideEncryptionConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param serverSideEncryptionConfiguration This parameter is required.
         */
        public Builder serverSideEncryptionConfiguration(final com.aliyun.ros.cdk.oss.RosBucket.ServerSideEncryptionConfigurationProperty serverSideEncryptionConfiguration) {
            this.props.serverSideEncryptionConfiguration(serverSideEncryptionConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param storageClass This parameter is required.
         */
        public Builder storageClass(final java.lang.String storageClass) {
            this.props.storageClass(storageClass);
            return this;
        }
        /**
         * @return {@code this}
         * @param storageClass This parameter is required.
         */
        public Builder storageClass(final com.aliyun.ros.cdk.core.IResolvable storageClass) {
            this.props.storageClass(storageClass);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param versioningConfiguration This parameter is required.
         */
        public Builder versioningConfiguration(final com.aliyun.ros.cdk.core.IResolvable versioningConfiguration) {
            this.props.versioningConfiguration(versioningConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param versioningConfiguration This parameter is required.
         */
        public Builder versioningConfiguration(final com.aliyun.ros.cdk.oss.RosBucket.VersioningConfigurationProperty versioningConfiguration) {
            this.props.versioningConfiguration(versioningConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param websiteConfigurationV2 This parameter is required.
         */
        public Builder websiteConfigurationV2(final com.aliyun.ros.cdk.core.IResolvable websiteConfigurationV2) {
            this.props.websiteConfigurationV2(websiteConfigurationV2);
            return this;
        }
        /**
         * @return {@code this}
         * @param websiteConfigurationV2 This parameter is required.
         */
        public Builder websiteConfigurationV2(final com.aliyun.ros.cdk.oss.RosBucket.WebsiteConfigurationV2Property websiteConfigurationV2) {
            this.props.websiteConfigurationV2(websiteConfigurationV2);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oss.RosBucket}.
         */
        @Override
        public com.aliyun.ros.cdk.oss.RosBucket build() {
            return new com.aliyun.ros.cdk.oss.RosBucket(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
