package com.aliyun.ros.cdk.oss;

/**
 * Properties for defining a <code>RosBucket</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucket
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:18.554Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucketProps")
@software.amazon.jsii.Jsii.Proxy(RosBucketProps.Jsii$Proxy.class)
public interface RosBucketProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBucketName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessControl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCorsConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableOssHdfsService() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLifecycleConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoggingConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRedundancyType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefererConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServerSideEncryptionConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageClass() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVersioningConfiguration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWebsiteConfigurationV2() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosBucketProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBucketProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBucketProps> {
        java.lang.Object bucketName;
        java.lang.Object accessControl;
        java.lang.Object corsConfiguration;
        java.lang.Object deletionForce;
        java.lang.Object enableOssHdfsService;
        java.lang.Object lifecycleConfiguration;
        java.lang.Object loggingConfiguration;
        java.lang.Object policy;
        java.lang.Object redundancyType;
        java.lang.Object refererConfiguration;
        java.lang.Object resourceGroupId;
        java.lang.Object serverSideEncryptionConfiguration;
        java.lang.Object storageClass;
        java.util.Map<java.lang.String, java.lang.Object> tags;
        java.lang.Object versioningConfiguration;
        java.lang.Object websiteConfigurationV2;

        /**
         * Sets the value of {@link RosBucketProps#getBucketName}
         * @param bucketName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bucketName(java.lang.String bucketName) {
            this.bucketName = bucketName;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getBucketName}
         * @param bucketName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bucketName(com.aliyun.ros.cdk.core.IResolvable bucketName) {
            this.bucketName = bucketName;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getAccessControl}
         * @param accessControl the value to be set.
         * @return {@code this}
         */
        public Builder accessControl(java.lang.String accessControl) {
            this.accessControl = accessControl;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getAccessControl}
         * @param accessControl the value to be set.
         * @return {@code this}
         */
        public Builder accessControl(com.aliyun.ros.cdk.core.IResolvable accessControl) {
            this.accessControl = accessControl;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getCorsConfiguration}
         * @param corsConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder corsConfiguration(com.aliyun.ros.cdk.core.IResolvable corsConfiguration) {
            this.corsConfiguration = corsConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getCorsConfiguration}
         * @param corsConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder corsConfiguration(com.aliyun.ros.cdk.oss.RosBucket.CORSConfigurationProperty corsConfiguration) {
            this.corsConfiguration = corsConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getDeletionForce}
         * @param deletionForce the value to be set.
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getDeletionForce}
         * @param deletionForce the value to be set.
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getEnableOssHdfsService}
         * @param enableOssHdfsService the value to be set.
         * @return {@code this}
         */
        public Builder enableOssHdfsService(java.lang.Boolean enableOssHdfsService) {
            this.enableOssHdfsService = enableOssHdfsService;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getEnableOssHdfsService}
         * @param enableOssHdfsService the value to be set.
         * @return {@code this}
         */
        public Builder enableOssHdfsService(com.aliyun.ros.cdk.core.IResolvable enableOssHdfsService) {
            this.enableOssHdfsService = enableOssHdfsService;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getLifecycleConfiguration}
         * @param lifecycleConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder lifecycleConfiguration(com.aliyun.ros.cdk.core.IResolvable lifecycleConfiguration) {
            this.lifecycleConfiguration = lifecycleConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getLifecycleConfiguration}
         * @param lifecycleConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder lifecycleConfiguration(com.aliyun.ros.cdk.oss.RosBucket.LifecycleConfigurationProperty lifecycleConfiguration) {
            this.lifecycleConfiguration = lifecycleConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getLoggingConfiguration}
         * @param loggingConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder loggingConfiguration(com.aliyun.ros.cdk.core.IResolvable loggingConfiguration) {
            this.loggingConfiguration = loggingConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getLoggingConfiguration}
         * @param loggingConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder loggingConfiguration(com.aliyun.ros.cdk.oss.RosBucket.LoggingConfigurationProperty loggingConfiguration) {
            this.loggingConfiguration = loggingConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getPolicy}
         * @param policy the value to be set.
         * @return {@code this}
         */
        public Builder policy(com.aliyun.ros.cdk.core.IResolvable policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getPolicy}
         * @param policy the value to be set.
         * @return {@code this}
         */
        public Builder policy(java.util.Map<java.lang.String, ? extends java.lang.Object> policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getRedundancyType}
         * @param redundancyType the value to be set.
         * @return {@code this}
         */
        public Builder redundancyType(java.lang.String redundancyType) {
            this.redundancyType = redundancyType;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getRedundancyType}
         * @param redundancyType the value to be set.
         * @return {@code this}
         */
        public Builder redundancyType(com.aliyun.ros.cdk.core.IResolvable redundancyType) {
            this.redundancyType = redundancyType;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getRefererConfiguration}
         * @param refererConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder refererConfiguration(com.aliyun.ros.cdk.core.IResolvable refererConfiguration) {
            this.refererConfiguration = refererConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getRefererConfiguration}
         * @param refererConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder refererConfiguration(com.aliyun.ros.cdk.oss.RosBucket.RefererConfigurationProperty refererConfiguration) {
            this.refererConfiguration = refererConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getServerSideEncryptionConfiguration}
         * @param serverSideEncryptionConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder serverSideEncryptionConfiguration(com.aliyun.ros.cdk.core.IResolvable serverSideEncryptionConfiguration) {
            this.serverSideEncryptionConfiguration = serverSideEncryptionConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getServerSideEncryptionConfiguration}
         * @param serverSideEncryptionConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder serverSideEncryptionConfiguration(com.aliyun.ros.cdk.oss.RosBucket.ServerSideEncryptionConfigurationProperty serverSideEncryptionConfiguration) {
            this.serverSideEncryptionConfiguration = serverSideEncryptionConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getStorageClass}
         * @param storageClass the value to be set.
         * @return {@code this}
         */
        public Builder storageClass(java.lang.String storageClass) {
            this.storageClass = storageClass;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getStorageClass}
         * @param storageClass the value to be set.
         * @return {@code this}
         */
        public Builder storageClass(com.aliyun.ros.cdk.core.IResolvable storageClass) {
            this.storageClass = storageClass;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getVersioningConfiguration}
         * @param versioningConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder versioningConfiguration(com.aliyun.ros.cdk.core.IResolvable versioningConfiguration) {
            this.versioningConfiguration = versioningConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getVersioningConfiguration}
         * @param versioningConfiguration the value to be set.
         * @return {@code this}
         */
        public Builder versioningConfiguration(com.aliyun.ros.cdk.oss.RosBucket.VersioningConfigurationProperty versioningConfiguration) {
            this.versioningConfiguration = versioningConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getWebsiteConfigurationV2}
         * @param websiteConfigurationV2 the value to be set.
         * @return {@code this}
         */
        public Builder websiteConfigurationV2(com.aliyun.ros.cdk.core.IResolvable websiteConfigurationV2) {
            this.websiteConfigurationV2 = websiteConfigurationV2;
            return this;
        }

        /**
         * Sets the value of {@link RosBucketProps#getWebsiteConfigurationV2}
         * @param websiteConfigurationV2 the value to be set.
         * @return {@code this}
         */
        public Builder websiteConfigurationV2(com.aliyun.ros.cdk.oss.RosBucket.WebsiteConfigurationV2Property websiteConfigurationV2) {
            this.websiteConfigurationV2 = websiteConfigurationV2;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBucketProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBucketProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBucketProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBucketProps {
        private final java.lang.Object bucketName;
        private final java.lang.Object accessControl;
        private final java.lang.Object corsConfiguration;
        private final java.lang.Object deletionForce;
        private final java.lang.Object enableOssHdfsService;
        private final java.lang.Object lifecycleConfiguration;
        private final java.lang.Object loggingConfiguration;
        private final java.lang.Object policy;
        private final java.lang.Object redundancyType;
        private final java.lang.Object refererConfiguration;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object serverSideEncryptionConfiguration;
        private final java.lang.Object storageClass;
        private final java.util.Map<java.lang.String, java.lang.Object> tags;
        private final java.lang.Object versioningConfiguration;
        private final java.lang.Object websiteConfigurationV2;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bucketName = software.amazon.jsii.Kernel.get(this, "bucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessControl = software.amazon.jsii.Kernel.get(this, "accessControl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.corsConfiguration = software.amazon.jsii.Kernel.get(this, "corsConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionForce = software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableOssHdfsService = software.amazon.jsii.Kernel.get(this, "enableOssHdfsService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lifecycleConfiguration = software.amazon.jsii.Kernel.get(this, "lifecycleConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loggingConfiguration = software.amazon.jsii.Kernel.get(this, "loggingConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policy = software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.redundancyType = software.amazon.jsii.Kernel.get(this, "redundancyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refererConfiguration = software.amazon.jsii.Kernel.get(this, "refererConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverSideEncryptionConfiguration = software.amazon.jsii.Kernel.get(this, "serverSideEncryptionConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageClass = software.amazon.jsii.Kernel.get(this, "storageClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)));
            this.versioningConfiguration = software.amazon.jsii.Kernel.get(this, "versioningConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.websiteConfigurationV2 = software.amazon.jsii.Kernel.get(this, "websiteConfigurationV2", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bucketName = java.util.Objects.requireNonNull(builder.bucketName, "bucketName is required");
            this.accessControl = builder.accessControl;
            this.corsConfiguration = builder.corsConfiguration;
            this.deletionForce = builder.deletionForce;
            this.enableOssHdfsService = builder.enableOssHdfsService;
            this.lifecycleConfiguration = builder.lifecycleConfiguration;
            this.loggingConfiguration = builder.loggingConfiguration;
            this.policy = builder.policy;
            this.redundancyType = builder.redundancyType;
            this.refererConfiguration = builder.refererConfiguration;
            this.resourceGroupId = builder.resourceGroupId;
            this.serverSideEncryptionConfiguration = builder.serverSideEncryptionConfiguration;
            this.storageClass = builder.storageClass;
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)builder.tags;
            this.versioningConfiguration = builder.versioningConfiguration;
            this.websiteConfigurationV2 = builder.websiteConfigurationV2;
        }

        @Override
        public final java.lang.Object getBucketName() {
            return this.bucketName;
        }

        @Override
        public final java.lang.Object getAccessControl() {
            return this.accessControl;
        }

        @Override
        public final java.lang.Object getCorsConfiguration() {
            return this.corsConfiguration;
        }

        @Override
        public final java.lang.Object getDeletionForce() {
            return this.deletionForce;
        }

        @Override
        public final java.lang.Object getEnableOssHdfsService() {
            return this.enableOssHdfsService;
        }

        @Override
        public final java.lang.Object getLifecycleConfiguration() {
            return this.lifecycleConfiguration;
        }

        @Override
        public final java.lang.Object getLoggingConfiguration() {
            return this.loggingConfiguration;
        }

        @Override
        public final java.lang.Object getPolicy() {
            return this.policy;
        }

        @Override
        public final java.lang.Object getRedundancyType() {
            return this.redundancyType;
        }

        @Override
        public final java.lang.Object getRefererConfiguration() {
            return this.refererConfiguration;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getServerSideEncryptionConfiguration() {
            return this.serverSideEncryptionConfiguration;
        }

        @Override
        public final java.lang.Object getStorageClass() {
            return this.storageClass;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.Object> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVersioningConfiguration() {
            return this.versioningConfiguration;
        }

        @Override
        public final java.lang.Object getWebsiteConfigurationV2() {
            return this.websiteConfigurationV2;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bucketName", om.valueToTree(this.getBucketName()));
            if (this.getAccessControl() != null) {
                data.set("accessControl", om.valueToTree(this.getAccessControl()));
            }
            if (this.getCorsConfiguration() != null) {
                data.set("corsConfiguration", om.valueToTree(this.getCorsConfiguration()));
            }
            if (this.getDeletionForce() != null) {
                data.set("deletionForce", om.valueToTree(this.getDeletionForce()));
            }
            if (this.getEnableOssHdfsService() != null) {
                data.set("enableOssHdfsService", om.valueToTree(this.getEnableOssHdfsService()));
            }
            if (this.getLifecycleConfiguration() != null) {
                data.set("lifecycleConfiguration", om.valueToTree(this.getLifecycleConfiguration()));
            }
            if (this.getLoggingConfiguration() != null) {
                data.set("loggingConfiguration", om.valueToTree(this.getLoggingConfiguration()));
            }
            if (this.getPolicy() != null) {
                data.set("policy", om.valueToTree(this.getPolicy()));
            }
            if (this.getRedundancyType() != null) {
                data.set("redundancyType", om.valueToTree(this.getRedundancyType()));
            }
            if (this.getRefererConfiguration() != null) {
                data.set("refererConfiguration", om.valueToTree(this.getRefererConfiguration()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getServerSideEncryptionConfiguration() != null) {
                data.set("serverSideEncryptionConfiguration", om.valueToTree(this.getServerSideEncryptionConfiguration()));
            }
            if (this.getStorageClass() != null) {
                data.set("storageClass", om.valueToTree(this.getStorageClass()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVersioningConfiguration() != null) {
                data.set("versioningConfiguration", om.valueToTree(this.getVersioningConfiguration()));
            }
            if (this.getWebsiteConfigurationV2() != null) {
                data.set("websiteConfigurationV2", om.valueToTree(this.getWebsiteConfigurationV2()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucketProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBucketProps.Jsii$Proxy that = (RosBucketProps.Jsii$Proxy) o;

            if (!bucketName.equals(that.bucketName)) return false;
            if (this.accessControl != null ? !this.accessControl.equals(that.accessControl) : that.accessControl != null) return false;
            if (this.corsConfiguration != null ? !this.corsConfiguration.equals(that.corsConfiguration) : that.corsConfiguration != null) return false;
            if (this.deletionForce != null ? !this.deletionForce.equals(that.deletionForce) : that.deletionForce != null) return false;
            if (this.enableOssHdfsService != null ? !this.enableOssHdfsService.equals(that.enableOssHdfsService) : that.enableOssHdfsService != null) return false;
            if (this.lifecycleConfiguration != null ? !this.lifecycleConfiguration.equals(that.lifecycleConfiguration) : that.lifecycleConfiguration != null) return false;
            if (this.loggingConfiguration != null ? !this.loggingConfiguration.equals(that.loggingConfiguration) : that.loggingConfiguration != null) return false;
            if (this.policy != null ? !this.policy.equals(that.policy) : that.policy != null) return false;
            if (this.redundancyType != null ? !this.redundancyType.equals(that.redundancyType) : that.redundancyType != null) return false;
            if (this.refererConfiguration != null ? !this.refererConfiguration.equals(that.refererConfiguration) : that.refererConfiguration != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.serverSideEncryptionConfiguration != null ? !this.serverSideEncryptionConfiguration.equals(that.serverSideEncryptionConfiguration) : that.serverSideEncryptionConfiguration != null) return false;
            if (this.storageClass != null ? !this.storageClass.equals(that.storageClass) : that.storageClass != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.versioningConfiguration != null ? !this.versioningConfiguration.equals(that.versioningConfiguration) : that.versioningConfiguration != null) return false;
            return this.websiteConfigurationV2 != null ? this.websiteConfigurationV2.equals(that.websiteConfigurationV2) : that.websiteConfigurationV2 == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bucketName.hashCode();
            result = 31 * result + (this.accessControl != null ? this.accessControl.hashCode() : 0);
            result = 31 * result + (this.corsConfiguration != null ? this.corsConfiguration.hashCode() : 0);
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            result = 31 * result + (this.enableOssHdfsService != null ? this.enableOssHdfsService.hashCode() : 0);
            result = 31 * result + (this.lifecycleConfiguration != null ? this.lifecycleConfiguration.hashCode() : 0);
            result = 31 * result + (this.loggingConfiguration != null ? this.loggingConfiguration.hashCode() : 0);
            result = 31 * result + (this.policy != null ? this.policy.hashCode() : 0);
            result = 31 * result + (this.redundancyType != null ? this.redundancyType.hashCode() : 0);
            result = 31 * result + (this.refererConfiguration != null ? this.refererConfiguration.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.serverSideEncryptionConfiguration != null ? this.serverSideEncryptionConfiguration.hashCode() : 0);
            result = 31 * result + (this.storageClass != null ? this.storageClass.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.versioningConfiguration != null ? this.versioningConfiguration.hashCode() : 0);
            result = 31 * result + (this.websiteConfigurationV2 != null ? this.websiteConfigurationV2.hashCode() : 0);
            return result;
        }
    }
}
