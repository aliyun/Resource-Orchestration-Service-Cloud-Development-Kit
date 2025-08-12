package com.aliyun.ros.cdk.oss;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::OSS::BucketReplication</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.905Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucketReplication")
public class RosBucketReplication extends com.aliyun.ros.cdk.core.RosResource {

    protected RosBucketReplication(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosBucketReplication(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.oss.RosBucketReplication.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosBucketReplication(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.RosBucketReplicationProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getReplicationConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "replicationConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReplicationConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "replicationConfiguration", java.util.Objects.requireNonNull(value, "replicationConfiguration is required"));
    }

    /**
     */
    public void setReplicationConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.RosBucketReplication.ReplicationConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "replicationConfiguration", java.util.Objects.requireNonNull(value, "replicationConfiguration is required"));
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucketReplication.DestinationProperty")
    @software.amazon.jsii.Jsii.Proxy(DestinationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DestinationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getBucket();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getLocation();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTransferType();

        /**
         * @return a {@link Builder} of {@link DestinationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DestinationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DestinationProperty> {
            java.lang.Object bucket;
            java.lang.Object location;
            java.lang.Object transferType;

            /**
             * Sets the value of {@link DestinationProperty#getBucket}
             * @param bucket the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bucket(java.lang.String bucket) {
                this.bucket = bucket;
                return this;
            }

            /**
             * Sets the value of {@link DestinationProperty#getBucket}
             * @param bucket the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder bucket(com.aliyun.ros.cdk.core.IResolvable bucket) {
                this.bucket = bucket;
                return this;
            }

            /**
             * Sets the value of {@link DestinationProperty#getLocation}
             * @param location the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder location(java.lang.String location) {
                this.location = location;
                return this;
            }

            /**
             * Sets the value of {@link DestinationProperty#getLocation}
             * @param location the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder location(com.aliyun.ros.cdk.core.IResolvable location) {
                this.location = location;
                return this;
            }

            /**
             * Sets the value of {@link DestinationProperty#getTransferType}
             * @param transferType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder transferType(java.lang.String transferType) {
                this.transferType = transferType;
                return this;
            }

            /**
             * Sets the value of {@link DestinationProperty#getTransferType}
             * @param transferType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder transferType(com.aliyun.ros.cdk.core.IResolvable transferType) {
                this.transferType = transferType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DestinationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DestinationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DestinationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DestinationProperty {
            private final java.lang.Object bucket;
            private final java.lang.Object location;
            private final java.lang.Object transferType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.bucket = software.amazon.jsii.Kernel.get(this, "bucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.location = software.amazon.jsii.Kernel.get(this, "location", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.transferType = software.amazon.jsii.Kernel.get(this, "transferType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.bucket = java.util.Objects.requireNonNull(builder.bucket, "bucket is required");
                this.location = java.util.Objects.requireNonNull(builder.location, "location is required");
                this.transferType = java.util.Objects.requireNonNull(builder.transferType, "transferType is required");
            }

            @Override
            public final java.lang.Object getBucket() {
                return this.bucket;
            }

            @Override
            public final java.lang.Object getLocation() {
                return this.location;
            }

            @Override
            public final java.lang.Object getTransferType() {
                return this.transferType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("bucket", om.valueToTree(this.getBucket()));
                data.set("location", om.valueToTree(this.getLocation()));
                data.set("transferType", om.valueToTree(this.getTransferType()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucketReplication.DestinationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DestinationProperty.Jsii$Proxy that = (DestinationProperty.Jsii$Proxy) o;

                if (!bucket.equals(that.bucket)) return false;
                if (!location.equals(that.location)) return false;
                return this.transferType.equals(that.transferType);
            }

            @Override
            public final int hashCode() {
                int result = this.bucket.hashCode();
                result = 31 * result + (this.location.hashCode());
                result = 31 * result + (this.transferType.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucketReplication.EncryptionConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(EncryptionConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EncryptionConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReplicaKmsKeyId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EncryptionConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EncryptionConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EncryptionConfigurationProperty> {
            java.lang.Object replicaKmsKeyId;

            /**
             * Sets the value of {@link EncryptionConfigurationProperty#getReplicaKmsKeyId}
             * @param replicaKmsKeyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replicaKmsKeyId(java.lang.String replicaKmsKeyId) {
                this.replicaKmsKeyId = replicaKmsKeyId;
                return this;
            }

            /**
             * Sets the value of {@link EncryptionConfigurationProperty#getReplicaKmsKeyId}
             * @param replicaKmsKeyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder replicaKmsKeyId(com.aliyun.ros.cdk.core.IResolvable replicaKmsKeyId) {
                this.replicaKmsKeyId = replicaKmsKeyId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EncryptionConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EncryptionConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link EncryptionConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EncryptionConfigurationProperty {
            private final java.lang.Object replicaKmsKeyId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.replicaKmsKeyId = software.amazon.jsii.Kernel.get(this, "replicaKmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.replicaKmsKeyId = builder.replicaKmsKeyId;
            }

            @Override
            public final java.lang.Object getReplicaKmsKeyId() {
                return this.replicaKmsKeyId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getReplicaKmsKeyId() != null) {
                    data.set("replicaKmsKeyId", om.valueToTree(this.getReplicaKmsKeyId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucketReplication.EncryptionConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EncryptionConfigurationProperty.Jsii$Proxy that = (EncryptionConfigurationProperty.Jsii$Proxy) o;

                return this.replicaKmsKeyId != null ? this.replicaKmsKeyId.equals(that.replicaKmsKeyId) : that.replicaKmsKeyId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.replicaKmsKeyId != null ? this.replicaKmsKeyId.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucketReplication.RTCProperty")
    @software.amazon.jsii.Jsii.Proxy(RTCProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RTCProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RTCProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RTCProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RTCProperty> {
            java.lang.Object status;

            /**
             * Sets the value of {@link RTCProperty#getStatus}
             * @param status the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder status(java.lang.String status) {
                this.status = status;
                return this;
            }

            /**
             * Sets the value of {@link RTCProperty#getStatus}
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
             * @return a new instance of {@link RTCProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RTCProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RTCProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RTCProperty {
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
                this.status = builder.status;
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

                if (this.getStatus() != null) {
                    data.set("status", om.valueToTree(this.getStatus()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucketReplication.RTCProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RTCProperty.Jsii$Proxy that = (RTCProperty.Jsii$Proxy) o;

                return this.status != null ? this.status.equals(that.status) : that.status == null;
            }

            @Override
            public final int hashCode() {
                int result = this.status != null ? this.status.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucketReplication.ReplicationConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(ReplicationConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ReplicationConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRule();

        /**
         * @return a {@link Builder} of {@link ReplicationConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ReplicationConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ReplicationConfigurationProperty> {
            java.lang.Object rule;

            /**
             * Sets the value of {@link ReplicationConfigurationProperty#getRule}
             * @param rule the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rule(com.aliyun.ros.cdk.core.IResolvable rule) {
                this.rule = rule;
                return this;
            }

            /**
             * Sets the value of {@link ReplicationConfigurationProperty#getRule}
             * @param rule the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rule(com.aliyun.ros.cdk.oss.RosBucketReplication.RuleProperty rule) {
                this.rule = rule;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ReplicationConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ReplicationConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ReplicationConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ReplicationConfigurationProperty {
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucketReplication.ReplicationConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ReplicationConfigurationProperty.Jsii$Proxy that = (ReplicationConfigurationProperty.Jsii$Proxy) o;

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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucketReplication.RuleProperty")
    @software.amazon.jsii.Jsii.Proxy(RuleProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RuleProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDestination();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAction() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionConfiguration() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHistoricalObjectReplication() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIdentity() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPrefixSet() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRtc() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSourceSelectionCriteria() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSyncRole() {
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
            java.lang.Object destination;
            java.lang.Object action;
            java.lang.Object encryptionConfiguration;
            java.lang.Object historicalObjectReplication;
            java.lang.Object identity;
            java.lang.Object prefixSet;
            java.lang.Object rtc;
            java.lang.Object sourceSelectionCriteria;
            java.lang.Object syncRole;

            /**
             * Sets the value of {@link RuleProperty#getDestination}
             * @param destination the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destination(com.aliyun.ros.cdk.core.IResolvable destination) {
                this.destination = destination;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getDestination}
             * @param destination the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destination(com.aliyun.ros.cdk.oss.RosBucketReplication.DestinationProperty destination) {
                this.destination = destination;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getAction}
             * @param action the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(java.lang.String action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getAction}
             * @param action the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder action(com.aliyun.ros.cdk.core.IResolvable action) {
                this.action = action;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getEncryptionConfiguration}
             * @param encryptionConfiguration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder encryptionConfiguration(com.aliyun.ros.cdk.core.IResolvable encryptionConfiguration) {
                this.encryptionConfiguration = encryptionConfiguration;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getEncryptionConfiguration}
             * @param encryptionConfiguration the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder encryptionConfiguration(com.aliyun.ros.cdk.oss.RosBucketReplication.EncryptionConfigurationProperty encryptionConfiguration) {
                this.encryptionConfiguration = encryptionConfiguration;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getHistoricalObjectReplication}
             * @param historicalObjectReplication the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder historicalObjectReplication(java.lang.String historicalObjectReplication) {
                this.historicalObjectReplication = historicalObjectReplication;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getHistoricalObjectReplication}
             * @param historicalObjectReplication the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder historicalObjectReplication(com.aliyun.ros.cdk.core.IResolvable historicalObjectReplication) {
                this.historicalObjectReplication = historicalObjectReplication;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getIdentity}
             * @param identity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder identity(java.lang.String identity) {
                this.identity = identity;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getIdentity}
             * @param identity the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder identity(com.aliyun.ros.cdk.core.IResolvable identity) {
                this.identity = identity;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getPrefixSet}
             * @param prefixSet the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder prefixSet(com.aliyun.ros.cdk.core.IResolvable prefixSet) {
                this.prefixSet = prefixSet;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getPrefixSet}
             * @param prefixSet the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder prefixSet(java.util.List<? extends java.lang.Object> prefixSet) {
                this.prefixSet = prefixSet;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getRtc}
             * @param rtc the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rtc(com.aliyun.ros.cdk.core.IResolvable rtc) {
                this.rtc = rtc;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getRtc}
             * @param rtc the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rtc(com.aliyun.ros.cdk.oss.RosBucketReplication.RTCProperty rtc) {
                this.rtc = rtc;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getSourceSelectionCriteria}
             * @param sourceSelectionCriteria the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceSelectionCriteria(com.aliyun.ros.cdk.core.IResolvable sourceSelectionCriteria) {
                this.sourceSelectionCriteria = sourceSelectionCriteria;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getSourceSelectionCriteria}
             * @param sourceSelectionCriteria the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceSelectionCriteria(com.aliyun.ros.cdk.oss.RosBucketReplication.SourceSelectionCriteriaProperty sourceSelectionCriteria) {
                this.sourceSelectionCriteria = sourceSelectionCriteria;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getSyncRole}
             * @param syncRole the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder syncRole(java.lang.String syncRole) {
                this.syncRole = syncRole;
                return this;
            }

            /**
             * Sets the value of {@link RuleProperty#getSyncRole}
             * @param syncRole the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder syncRole(com.aliyun.ros.cdk.core.IResolvable syncRole) {
                this.syncRole = syncRole;
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
            private final java.lang.Object destination;
            private final java.lang.Object action;
            private final java.lang.Object encryptionConfiguration;
            private final java.lang.Object historicalObjectReplication;
            private final java.lang.Object identity;
            private final java.lang.Object prefixSet;
            private final java.lang.Object rtc;
            private final java.lang.Object sourceSelectionCriteria;
            private final java.lang.Object syncRole;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.destination = software.amazon.jsii.Kernel.get(this, "destination", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.action = software.amazon.jsii.Kernel.get(this, "action", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.encryptionConfiguration = software.amazon.jsii.Kernel.get(this, "encryptionConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.historicalObjectReplication = software.amazon.jsii.Kernel.get(this, "historicalObjectReplication", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.identity = software.amazon.jsii.Kernel.get(this, "identity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.prefixSet = software.amazon.jsii.Kernel.get(this, "prefixSet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rtc = software.amazon.jsii.Kernel.get(this, "rtc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sourceSelectionCriteria = software.amazon.jsii.Kernel.get(this, "sourceSelectionCriteria", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.syncRole = software.amazon.jsii.Kernel.get(this, "syncRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.destination = java.util.Objects.requireNonNull(builder.destination, "destination is required");
                this.action = builder.action;
                this.encryptionConfiguration = builder.encryptionConfiguration;
                this.historicalObjectReplication = builder.historicalObjectReplication;
                this.identity = builder.identity;
                this.prefixSet = builder.prefixSet;
                this.rtc = builder.rtc;
                this.sourceSelectionCriteria = builder.sourceSelectionCriteria;
                this.syncRole = builder.syncRole;
            }

            @Override
            public final java.lang.Object getDestination() {
                return this.destination;
            }

            @Override
            public final java.lang.Object getAction() {
                return this.action;
            }

            @Override
            public final java.lang.Object getEncryptionConfiguration() {
                return this.encryptionConfiguration;
            }

            @Override
            public final java.lang.Object getHistoricalObjectReplication() {
                return this.historicalObjectReplication;
            }

            @Override
            public final java.lang.Object getIdentity() {
                return this.identity;
            }

            @Override
            public final java.lang.Object getPrefixSet() {
                return this.prefixSet;
            }

            @Override
            public final java.lang.Object getRtc() {
                return this.rtc;
            }

            @Override
            public final java.lang.Object getSourceSelectionCriteria() {
                return this.sourceSelectionCriteria;
            }

            @Override
            public final java.lang.Object getSyncRole() {
                return this.syncRole;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("destination", om.valueToTree(this.getDestination()));
                if (this.getAction() != null) {
                    data.set("action", om.valueToTree(this.getAction()));
                }
                if (this.getEncryptionConfiguration() != null) {
                    data.set("encryptionConfiguration", om.valueToTree(this.getEncryptionConfiguration()));
                }
                if (this.getHistoricalObjectReplication() != null) {
                    data.set("historicalObjectReplication", om.valueToTree(this.getHistoricalObjectReplication()));
                }
                if (this.getIdentity() != null) {
                    data.set("identity", om.valueToTree(this.getIdentity()));
                }
                if (this.getPrefixSet() != null) {
                    data.set("prefixSet", om.valueToTree(this.getPrefixSet()));
                }
                if (this.getRtc() != null) {
                    data.set("rtc", om.valueToTree(this.getRtc()));
                }
                if (this.getSourceSelectionCriteria() != null) {
                    data.set("sourceSelectionCriteria", om.valueToTree(this.getSourceSelectionCriteria()));
                }
                if (this.getSyncRole() != null) {
                    data.set("syncRole", om.valueToTree(this.getSyncRole()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucketReplication.RuleProperty"));
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

                if (!destination.equals(that.destination)) return false;
                if (this.action != null ? !this.action.equals(that.action) : that.action != null) return false;
                if (this.encryptionConfiguration != null ? !this.encryptionConfiguration.equals(that.encryptionConfiguration) : that.encryptionConfiguration != null) return false;
                if (this.historicalObjectReplication != null ? !this.historicalObjectReplication.equals(that.historicalObjectReplication) : that.historicalObjectReplication != null) return false;
                if (this.identity != null ? !this.identity.equals(that.identity) : that.identity != null) return false;
                if (this.prefixSet != null ? !this.prefixSet.equals(that.prefixSet) : that.prefixSet != null) return false;
                if (this.rtc != null ? !this.rtc.equals(that.rtc) : that.rtc != null) return false;
                if (this.sourceSelectionCriteria != null ? !this.sourceSelectionCriteria.equals(that.sourceSelectionCriteria) : that.sourceSelectionCriteria != null) return false;
                return this.syncRole != null ? this.syncRole.equals(that.syncRole) : that.syncRole == null;
            }

            @Override
            public final int hashCode() {
                int result = this.destination.hashCode();
                result = 31 * result + (this.action != null ? this.action.hashCode() : 0);
                result = 31 * result + (this.encryptionConfiguration != null ? this.encryptionConfiguration.hashCode() : 0);
                result = 31 * result + (this.historicalObjectReplication != null ? this.historicalObjectReplication.hashCode() : 0);
                result = 31 * result + (this.identity != null ? this.identity.hashCode() : 0);
                result = 31 * result + (this.prefixSet != null ? this.prefixSet.hashCode() : 0);
                result = 31 * result + (this.rtc != null ? this.rtc.hashCode() : 0);
                result = 31 * result + (this.sourceSelectionCriteria != null ? this.sourceSelectionCriteria.hashCode() : 0);
                result = 31 * result + (this.syncRole != null ? this.syncRole.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucketReplication.SourceSelectionCriteriaProperty")
    @software.amazon.jsii.Jsii.Proxy(SourceSelectionCriteriaProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SourceSelectionCriteriaProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSseKmsEncryptedObjects() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SourceSelectionCriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SourceSelectionCriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SourceSelectionCriteriaProperty> {
            java.lang.Object sseKmsEncryptedObjects;

            /**
             * Sets the value of {@link SourceSelectionCriteriaProperty#getSseKmsEncryptedObjects}
             * @param sseKmsEncryptedObjects the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sseKmsEncryptedObjects(com.aliyun.ros.cdk.core.IResolvable sseKmsEncryptedObjects) {
                this.sseKmsEncryptedObjects = sseKmsEncryptedObjects;
                return this;
            }

            /**
             * Sets the value of {@link SourceSelectionCriteriaProperty#getSseKmsEncryptedObjects}
             * @param sseKmsEncryptedObjects the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sseKmsEncryptedObjects(com.aliyun.ros.cdk.oss.RosBucketReplication.SseKmsEncryptedObjectsProperty sseKmsEncryptedObjects) {
                this.sseKmsEncryptedObjects = sseKmsEncryptedObjects;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SourceSelectionCriteriaProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SourceSelectionCriteriaProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SourceSelectionCriteriaProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SourceSelectionCriteriaProperty {
            private final java.lang.Object sseKmsEncryptedObjects;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.sseKmsEncryptedObjects = software.amazon.jsii.Kernel.get(this, "sseKmsEncryptedObjects", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.sseKmsEncryptedObjects = builder.sseKmsEncryptedObjects;
            }

            @Override
            public final java.lang.Object getSseKmsEncryptedObjects() {
                return this.sseKmsEncryptedObjects;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getSseKmsEncryptedObjects() != null) {
                    data.set("sseKmsEncryptedObjects", om.valueToTree(this.getSseKmsEncryptedObjects()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucketReplication.SourceSelectionCriteriaProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SourceSelectionCriteriaProperty.Jsii$Proxy that = (SourceSelectionCriteriaProperty.Jsii$Proxy) o;

                return this.sseKmsEncryptedObjects != null ? this.sseKmsEncryptedObjects.equals(that.sseKmsEncryptedObjects) : that.sseKmsEncryptedObjects == null;
            }

            @Override
            public final int hashCode() {
                int result = this.sseKmsEncryptedObjects != null ? this.sseKmsEncryptedObjects.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.RosBucketReplication.SseKmsEncryptedObjectsProperty")
    @software.amazon.jsii.Jsii.Proxy(SseKmsEncryptedObjectsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SseKmsEncryptedObjectsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SseKmsEncryptedObjectsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SseKmsEncryptedObjectsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SseKmsEncryptedObjectsProperty> {
            java.lang.Object status;

            /**
             * Sets the value of {@link SseKmsEncryptedObjectsProperty#getStatus}
             * @param status the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder status(java.lang.String status) {
                this.status = status;
                return this;
            }

            /**
             * Sets the value of {@link SseKmsEncryptedObjectsProperty#getStatus}
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
             * @return a new instance of {@link SseKmsEncryptedObjectsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SseKmsEncryptedObjectsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SseKmsEncryptedObjectsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SseKmsEncryptedObjectsProperty {
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
                this.status = builder.status;
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

                if (this.getStatus() != null) {
                    data.set("status", om.valueToTree(this.getStatus()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oss.RosBucketReplication.SseKmsEncryptedObjectsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SseKmsEncryptedObjectsProperty.Jsii$Proxy that = (SseKmsEncryptedObjectsProperty.Jsii$Proxy) o;

                return this.status != null ? this.status.equals(that.status) : that.status == null;
            }

            @Override
            public final int hashCode() {
                int result = this.status != null ? this.status.hashCode() : 0;
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.oss.RosBucketReplication}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oss.RosBucketReplication> {
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
        private final com.aliyun.ros.cdk.oss.RosBucketReplicationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.oss.RosBucketReplicationProps.Builder();
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
         * @param replicationConfiguration This parameter is required.
         */
        public Builder replicationConfiguration(final com.aliyun.ros.cdk.core.IResolvable replicationConfiguration) {
            this.props.replicationConfiguration(replicationConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param replicationConfiguration This parameter is required.
         */
        public Builder replicationConfiguration(final com.aliyun.ros.cdk.oss.RosBucketReplication.ReplicationConfigurationProperty replicationConfiguration) {
            this.props.replicationConfiguration(replicationConfiguration);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oss.RosBucketReplication}.
         */
        @Override
        public com.aliyun.ros.cdk.oss.RosBucketReplication build() {
            return new com.aliyun.ros.cdk.oss.RosBucketReplication(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
