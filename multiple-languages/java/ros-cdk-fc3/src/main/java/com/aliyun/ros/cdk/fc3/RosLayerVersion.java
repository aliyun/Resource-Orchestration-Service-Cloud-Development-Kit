package com.aliyun.ros.cdk.fc3;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::FC3::LayerVersion</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:03:30.905Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosLayerVersion")
public class RosLayerVersion extends com.aliyun.ros.cdk.core.RosResource {

    protected RosLayerVersion(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosLayerVersion(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.fc3.RosLayerVersion.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosLayerVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.RosLayerVersionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAcl() {
        return software.amazon.jsii.Kernel.get(this, "attrAcl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCodeSize() {
        return software.amazon.jsii.Kernel.get(this, "attrCodeSize", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCompatibleRuntime() {
        return software.amazon.jsii.Kernel.get(this, "attrCompatibleRuntime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLayerName() {
        return software.amazon.jsii.Kernel.get(this, "attrLayerName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLayerVersionArn() {
        return software.amazon.jsii.Kernel.get(this, "attrLayerVersionArn", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLicense() {
        return software.amazon.jsii.Kernel.get(this, "attrLicense", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLayerName() {
        return software.amazon.jsii.Kernel.get(this, "layerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLayerName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "layerName", java.util.Objects.requireNonNull(value, "layerName is required"));
    }

    /**
     */
    public void setLayerName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "layerName", java.util.Objects.requireNonNull(value, "layerName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAcl() {
        return software.amazon.jsii.Kernel.get(this, "acl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAcl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "acl", value);
    }

    /**
     */
    public void setAcl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "acl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCode() {
        return software.amazon.jsii.Kernel.get(this, "code", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "code", value);
    }

    /**
     */
    public void setCode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc3.RosLayerVersion.CodeProperty value) {
        software.amazon.jsii.Kernel.set(this, "code", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCompatibleRuntime() {
        return software.amazon.jsii.Kernel.get(this, "compatibleRuntime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCompatibleRuntime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "compatibleRuntime", value);
    }

    /**
     */
    public void setCompatibleRuntime(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "compatibleRuntime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLicense() {
        return software.amazon.jsii.Kernel.get(this, "license", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLicense(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "license", value);
    }

    /**
     */
    public void setLicense(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "license", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosLayerVersion.CodeProperty")
    @software.amazon.jsii.Jsii.Proxy(CodeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CodeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getChecksum() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOssBucketName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOssObjectName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getZipFile() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CodeProperty> {
            java.lang.Object checksum;
            java.lang.Object ossBucketName;
            java.lang.Object ossObjectName;
            java.lang.Object zipFile;

            /**
             * Sets the value of {@link CodeProperty#getChecksum}
             * @param checksum the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checksum(java.lang.String checksum) {
                this.checksum = checksum;
                return this;
            }

            /**
             * Sets the value of {@link CodeProperty#getChecksum}
             * @param checksum the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder checksum(com.aliyun.ros.cdk.core.IResolvable checksum) {
                this.checksum = checksum;
                return this;
            }

            /**
             * Sets the value of {@link CodeProperty#getOssBucketName}
             * @param ossBucketName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossBucketName(java.lang.String ossBucketName) {
                this.ossBucketName = ossBucketName;
                return this;
            }

            /**
             * Sets the value of {@link CodeProperty#getOssBucketName}
             * @param ossBucketName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossBucketName(com.aliyun.ros.cdk.core.IResolvable ossBucketName) {
                this.ossBucketName = ossBucketName;
                return this;
            }

            /**
             * Sets the value of {@link CodeProperty#getOssObjectName}
             * @param ossObjectName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossObjectName(java.lang.String ossObjectName) {
                this.ossObjectName = ossObjectName;
                return this;
            }

            /**
             * Sets the value of {@link CodeProperty#getOssObjectName}
             * @param ossObjectName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ossObjectName(com.aliyun.ros.cdk.core.IResolvable ossObjectName) {
                this.ossObjectName = ossObjectName;
                return this;
            }

            /**
             * Sets the value of {@link CodeProperty#getZipFile}
             * @param zipFile the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zipFile(java.lang.String zipFile) {
                this.zipFile = zipFile;
                return this;
            }

            /**
             * Sets the value of {@link CodeProperty#getZipFile}
             * @param zipFile the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zipFile(com.aliyun.ros.cdk.core.IResolvable zipFile) {
                this.zipFile = zipFile;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CodeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CodeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CodeProperty {
            private final java.lang.Object checksum;
            private final java.lang.Object ossBucketName;
            private final java.lang.Object ossObjectName;
            private final java.lang.Object zipFile;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.checksum = software.amazon.jsii.Kernel.get(this, "checksum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossBucketName = software.amazon.jsii.Kernel.get(this, "ossBucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ossObjectName = software.amazon.jsii.Kernel.get(this, "ossObjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.zipFile = software.amazon.jsii.Kernel.get(this, "zipFile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.checksum = builder.checksum;
                this.ossBucketName = builder.ossBucketName;
                this.ossObjectName = builder.ossObjectName;
                this.zipFile = builder.zipFile;
            }

            @Override
            public final java.lang.Object getChecksum() {
                return this.checksum;
            }

            @Override
            public final java.lang.Object getOssBucketName() {
                return this.ossBucketName;
            }

            @Override
            public final java.lang.Object getOssObjectName() {
                return this.ossObjectName;
            }

            @Override
            public final java.lang.Object getZipFile() {
                return this.zipFile;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getChecksum() != null) {
                    data.set("checksum", om.valueToTree(this.getChecksum()));
                }
                if (this.getOssBucketName() != null) {
                    data.set("ossBucketName", om.valueToTree(this.getOssBucketName()));
                }
                if (this.getOssObjectName() != null) {
                    data.set("ossObjectName", om.valueToTree(this.getOssObjectName()));
                }
                if (this.getZipFile() != null) {
                    data.set("zipFile", om.valueToTree(this.getZipFile()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosLayerVersion.CodeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CodeProperty.Jsii$Proxy that = (CodeProperty.Jsii$Proxy) o;

                if (this.checksum != null ? !this.checksum.equals(that.checksum) : that.checksum != null) return false;
                if (this.ossBucketName != null ? !this.ossBucketName.equals(that.ossBucketName) : that.ossBucketName != null) return false;
                if (this.ossObjectName != null ? !this.ossObjectName.equals(that.ossObjectName) : that.ossObjectName != null) return false;
                return this.zipFile != null ? this.zipFile.equals(that.zipFile) : that.zipFile == null;
            }

            @Override
            public final int hashCode() {
                int result = this.checksum != null ? this.checksum.hashCode() : 0;
                result = 31 * result + (this.ossBucketName != null ? this.ossBucketName.hashCode() : 0);
                result = 31 * result + (this.ossObjectName != null ? this.ossObjectName.hashCode() : 0);
                result = 31 * result + (this.zipFile != null ? this.zipFile.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc3.RosLayerVersion}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc3.RosLayerVersion> {
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
        private final com.aliyun.ros.cdk.fc3.RosLayerVersionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc3.RosLayerVersionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param layerName This parameter is required.
         */
        public Builder layerName(final java.lang.String layerName) {
            this.props.layerName(layerName);
            return this;
        }
        /**
         * @return {@code this}
         * @param layerName This parameter is required.
         */
        public Builder layerName(final com.aliyun.ros.cdk.core.IResolvable layerName) {
            this.props.layerName(layerName);
            return this;
        }

        /**
         * @return {@code this}
         * @param acl This parameter is required.
         */
        public Builder acl(final java.lang.String acl) {
            this.props.acl(acl);
            return this;
        }
        /**
         * @return {@code this}
         * @param acl This parameter is required.
         */
        public Builder acl(final com.aliyun.ros.cdk.core.IResolvable acl) {
            this.props.acl(acl);
            return this;
        }

        /**
         * @return {@code this}
         * @param code This parameter is required.
         */
        public Builder code(final com.aliyun.ros.cdk.core.IResolvable code) {
            this.props.code(code);
            return this;
        }
        /**
         * @return {@code this}
         * @param code This parameter is required.
         */
        public Builder code(final com.aliyun.ros.cdk.fc3.RosLayerVersion.CodeProperty code) {
            this.props.code(code);
            return this;
        }

        /**
         * @return {@code this}
         * @param compatibleRuntime This parameter is required.
         */
        public Builder compatibleRuntime(final com.aliyun.ros.cdk.core.IResolvable compatibleRuntime) {
            this.props.compatibleRuntime(compatibleRuntime);
            return this;
        }
        /**
         * @return {@code this}
         * @param compatibleRuntime This parameter is required.
         */
        public Builder compatibleRuntime(final java.util.List<? extends java.lang.Object> compatibleRuntime) {
            this.props.compatibleRuntime(compatibleRuntime);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param license This parameter is required.
         */
        public Builder license(final java.lang.String license) {
            this.props.license(license);
            return this;
        }
        /**
         * @return {@code this}
         * @param license This parameter is required.
         */
        public Builder license(final com.aliyun.ros.cdk.core.IResolvable license) {
            this.props.license(license);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc3.RosLayerVersion}.
         */
        @Override
        public com.aliyun.ros.cdk.fc3.RosLayerVersion build() {
            return new com.aliyun.ros.cdk.fc3.RosLayerVersion(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
