package com.aliyun.ros.cdk.oss;

/**
 * Properties for defining a `ALIYUN::OSS::Bucket`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:04.949Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.BucketProps")
@software.amazon.jsii.Jsii.Proxy(BucketProps.Jsii$Proxy.class)
public interface BucketProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property bucketName: bucket name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBucketName();

    /**
     * Property accessControl: The access control list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessControl() {
        return null;
    }

    /**
     * Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCorsConfiguration() {
        return null;
    }

    /**
     * Property deletionForce: Whether force delete the relative objects in the bucket.
     * <p>
     * Default value is false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     * Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLifecycleConfiguration() {
        return null;
    }

    /**
     * Property loggingConfiguration: Settings that defines where logs are stored.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoggingConfiguration() {
        return null;
    }

    /**
     * Property policy: Bucket policy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicy() {
        return null;
    }

    /**
     * Property refererConfiguration: undefined.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefererConfiguration() {
        return null;
    }

    /**
     * Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServerSideEncryptionConfiguration() {
        return null;
    }

    /**
     * Property storageClass: Specifies the storage class of the bucket.
     * <p>
     * Default is "Standard".
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageClass() {
        return null;
    }

    /**
     * Property tags: Bucket tags in k-v pairs format.
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getTags() {
        return null;
    }

    /**
     * Property websiteConfiguration: The properties of website config.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWebsiteConfiguration() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link BucketProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link BucketProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<BucketProps> {
        java.lang.Object bucketName;
        java.lang.Object accessControl;
        java.lang.Object corsConfiguration;
        java.lang.Object deletionForce;
        java.lang.Object lifecycleConfiguration;
        java.lang.Object loggingConfiguration;
        java.lang.Object policy;
        java.lang.Object refererConfiguration;
        java.lang.Object serverSideEncryptionConfiguration;
        java.lang.Object storageClass;
        java.util.Map<java.lang.String, java.lang.Object> tags;
        java.lang.Object websiteConfiguration;

        /**
         * Sets the value of {@link BucketProps#getBucketName}
         * @param bucketName Property bucketName: bucket name. This parameter is required.
         * @return {@code this}
         */
        public Builder bucketName(java.lang.String bucketName) {
            this.bucketName = bucketName;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getBucketName}
         * @param bucketName Property bucketName: bucket name. This parameter is required.
         * @return {@code this}
         */
        public Builder bucketName(com.aliyun.ros.cdk.core.IResolvable bucketName) {
            this.bucketName = bucketName;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getAccessControl}
         * @param accessControl Property accessControl: The access control list.
         * @return {@code this}
         */
        public Builder accessControl(java.lang.String accessControl) {
            this.accessControl = accessControl;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getAccessControl}
         * @param accessControl Property accessControl: The access control list.
         * @return {@code this}
         */
        public Builder accessControl(com.aliyun.ros.cdk.core.IResolvable accessControl) {
            this.accessControl = accessControl;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getCorsConfiguration}
         * @param corsConfiguration Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
         * @return {@code this}
         */
        public Builder corsConfiguration(com.aliyun.ros.cdk.core.IResolvable corsConfiguration) {
            this.corsConfiguration = corsConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getCorsConfiguration}
         * @param corsConfiguration Property corsConfiguration: Rules that define cross-origin resource sharing of objects in this bucket.
         * @return {@code this}
         */
        public Builder corsConfiguration(com.aliyun.ros.cdk.oss.RosBucket.CORSConfigurationProperty corsConfiguration) {
            this.corsConfiguration = corsConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether force delete the relative objects in the bucket.
         *                      Default value is false.
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether force delete the relative objects in the bucket.
         *                      Default value is false.
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getLifecycleConfiguration}
         * @param lifecycleConfiguration Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
         * @return {@code this}
         */
        public Builder lifecycleConfiguration(com.aliyun.ros.cdk.core.IResolvable lifecycleConfiguration) {
            this.lifecycleConfiguration = lifecycleConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getLifecycleConfiguration}
         * @param lifecycleConfiguration Property lifecycleConfiguration: Rules that define how oss bucket manages objects during their lifetime.
         * @return {@code this}
         */
        public Builder lifecycleConfiguration(com.aliyun.ros.cdk.oss.RosBucket.LifecycleConfigurationProperty lifecycleConfiguration) {
            this.lifecycleConfiguration = lifecycleConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getLoggingConfiguration}
         * @param loggingConfiguration Property loggingConfiguration: Settings that defines where logs are stored.
         * @return {@code this}
         */
        public Builder loggingConfiguration(com.aliyun.ros.cdk.core.IResolvable loggingConfiguration) {
            this.loggingConfiguration = loggingConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getLoggingConfiguration}
         * @param loggingConfiguration Property loggingConfiguration: Settings that defines where logs are stored.
         * @return {@code this}
         */
        public Builder loggingConfiguration(com.aliyun.ros.cdk.oss.RosBucket.LoggingConfigurationProperty loggingConfiguration) {
            this.loggingConfiguration = loggingConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getPolicy}
         * @param policy Property policy: Bucket policy.
         * @return {@code this}
         */
        public Builder policy(com.aliyun.ros.cdk.core.IResolvable policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getPolicy}
         * @param policy Property policy: Bucket policy.
         * @return {@code this}
         */
        public Builder policy(java.util.Map<java.lang.String, ? extends java.lang.Object> policy) {
            this.policy = policy;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getRefererConfiguration}
         * @param refererConfiguration Property refererConfiguration: undefined.
         * @return {@code this}
         */
        public Builder refererConfiguration(com.aliyun.ros.cdk.core.IResolvable refererConfiguration) {
            this.refererConfiguration = refererConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getRefererConfiguration}
         * @param refererConfiguration Property refererConfiguration: undefined.
         * @return {@code this}
         */
        public Builder refererConfiguration(com.aliyun.ros.cdk.oss.RosBucket.RefererConfigurationProperty refererConfiguration) {
            this.refererConfiguration = refererConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getServerSideEncryptionConfiguration}
         * @param serverSideEncryptionConfiguration Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
         * @return {@code this}
         */
        public Builder serverSideEncryptionConfiguration(com.aliyun.ros.cdk.core.IResolvable serverSideEncryptionConfiguration) {
            this.serverSideEncryptionConfiguration = serverSideEncryptionConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getServerSideEncryptionConfiguration}
         * @param serverSideEncryptionConfiguration Property serverSideEncryptionConfiguration: Specifies the bucket used to store the server-side encryption rule.
         * @return {@code this}
         */
        public Builder serverSideEncryptionConfiguration(com.aliyun.ros.cdk.oss.RosBucket.ServerSideEncryptionConfigurationProperty serverSideEncryptionConfiguration) {
            this.serverSideEncryptionConfiguration = serverSideEncryptionConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getStorageClass}
         * @param storageClass Property storageClass: Specifies the storage class of the bucket.
         *                     Default is "Standard".
         * @return {@code this}
         */
        public Builder storageClass(java.lang.String storageClass) {
            this.storageClass = storageClass;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getStorageClass}
         * @param storageClass Property storageClass: Specifies the storage class of the bucket.
         *                     Default is "Standard".
         * @return {@code this}
         */
        public Builder storageClass(com.aliyun.ros.cdk.core.IResolvable storageClass) {
            this.storageClass = storageClass;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getTags}
         * @param tags Property tags: Bucket tags in k-v pairs format.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)tags;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getWebsiteConfiguration}
         * @param websiteConfiguration Property websiteConfiguration: The properties of website config.
         * @return {@code this}
         */
        public Builder websiteConfiguration(com.aliyun.ros.cdk.core.IResolvable websiteConfiguration) {
            this.websiteConfiguration = websiteConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link BucketProps#getWebsiteConfiguration}
         * @param websiteConfiguration Property websiteConfiguration: The properties of website config.
         * @return {@code this}
         */
        public Builder websiteConfiguration(com.aliyun.ros.cdk.oss.RosBucket.WebsiteConfigurationProperty websiteConfiguration) {
            this.websiteConfiguration = websiteConfiguration;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link BucketProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public BucketProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link BucketProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BucketProps {
        private final java.lang.Object bucketName;
        private final java.lang.Object accessControl;
        private final java.lang.Object corsConfiguration;
        private final java.lang.Object deletionForce;
        private final java.lang.Object lifecycleConfiguration;
        private final java.lang.Object loggingConfiguration;
        private final java.lang.Object policy;
        private final java.lang.Object refererConfiguration;
        private final java.lang.Object serverSideEncryptionConfiguration;
        private final java.lang.Object storageClass;
        private final java.util.Map<java.lang.String, java.lang.Object> tags;
        private final java.lang.Object websiteConfiguration;

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
            this.lifecycleConfiguration = software.amazon.jsii.Kernel.get(this, "lifecycleConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loggingConfiguration = software.amazon.jsii.Kernel.get(this, "loggingConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policy = software.amazon.jsii.Kernel.get(this, "policy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refererConfiguration = software.amazon.jsii.Kernel.get(this, "refererConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverSideEncryptionConfiguration = software.amazon.jsii.Kernel.get(this, "serverSideEncryptionConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageClass = software.amazon.jsii.Kernel.get(this, "storageClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)));
            this.websiteConfiguration = software.amazon.jsii.Kernel.get(this, "websiteConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.lifecycleConfiguration = builder.lifecycleConfiguration;
            this.loggingConfiguration = builder.loggingConfiguration;
            this.policy = builder.policy;
            this.refererConfiguration = builder.refererConfiguration;
            this.serverSideEncryptionConfiguration = builder.serverSideEncryptionConfiguration;
            this.storageClass = builder.storageClass;
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)builder.tags;
            this.websiteConfiguration = builder.websiteConfiguration;
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
        public final java.lang.Object getRefererConfiguration() {
            return this.refererConfiguration;
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
        public final java.lang.Object getWebsiteConfiguration() {
            return this.websiteConfiguration;
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
            if (this.getLifecycleConfiguration() != null) {
                data.set("lifecycleConfiguration", om.valueToTree(this.getLifecycleConfiguration()));
            }
            if (this.getLoggingConfiguration() != null) {
                data.set("loggingConfiguration", om.valueToTree(this.getLoggingConfiguration()));
            }
            if (this.getPolicy() != null) {
                data.set("policy", om.valueToTree(this.getPolicy()));
            }
            if (this.getRefererConfiguration() != null) {
                data.set("refererConfiguration", om.valueToTree(this.getRefererConfiguration()));
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
            if (this.getWebsiteConfiguration() != null) {
                data.set("websiteConfiguration", om.valueToTree(this.getWebsiteConfiguration()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.BucketProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            BucketProps.Jsii$Proxy that = (BucketProps.Jsii$Proxy) o;

            if (!bucketName.equals(that.bucketName)) return false;
            if (this.accessControl != null ? !this.accessControl.equals(that.accessControl) : that.accessControl != null) return false;
            if (this.corsConfiguration != null ? !this.corsConfiguration.equals(that.corsConfiguration) : that.corsConfiguration != null) return false;
            if (this.deletionForce != null ? !this.deletionForce.equals(that.deletionForce) : that.deletionForce != null) return false;
            if (this.lifecycleConfiguration != null ? !this.lifecycleConfiguration.equals(that.lifecycleConfiguration) : that.lifecycleConfiguration != null) return false;
            if (this.loggingConfiguration != null ? !this.loggingConfiguration.equals(that.loggingConfiguration) : that.loggingConfiguration != null) return false;
            if (this.policy != null ? !this.policy.equals(that.policy) : that.policy != null) return false;
            if (this.refererConfiguration != null ? !this.refererConfiguration.equals(that.refererConfiguration) : that.refererConfiguration != null) return false;
            if (this.serverSideEncryptionConfiguration != null ? !this.serverSideEncryptionConfiguration.equals(that.serverSideEncryptionConfiguration) : that.serverSideEncryptionConfiguration != null) return false;
            if (this.storageClass != null ? !this.storageClass.equals(that.storageClass) : that.storageClass != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.websiteConfiguration != null ? this.websiteConfiguration.equals(that.websiteConfiguration) : that.websiteConfiguration == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bucketName.hashCode();
            result = 31 * result + (this.accessControl != null ? this.accessControl.hashCode() : 0);
            result = 31 * result + (this.corsConfiguration != null ? this.corsConfiguration.hashCode() : 0);
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            result = 31 * result + (this.lifecycleConfiguration != null ? this.lifecycleConfiguration.hashCode() : 0);
            result = 31 * result + (this.loggingConfiguration != null ? this.loggingConfiguration.hashCode() : 0);
            result = 31 * result + (this.policy != null ? this.policy.hashCode() : 0);
            result = 31 * result + (this.refererConfiguration != null ? this.refererConfiguration.hashCode() : 0);
            result = 31 * result + (this.serverSideEncryptionConfiguration != null ? this.serverSideEncryptionConfiguration.hashCode() : 0);
            result = 31 * result + (this.storageClass != null ? this.storageClass.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.websiteConfiguration != null ? this.websiteConfiguration.hashCode() : 0);
            return result;
        }
    }
}
