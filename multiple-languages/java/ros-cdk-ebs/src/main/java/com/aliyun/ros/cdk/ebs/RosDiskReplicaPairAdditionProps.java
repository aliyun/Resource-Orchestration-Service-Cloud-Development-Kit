package com.aliyun.ros.cdk.ebs;

/**
 * Properties for defining a <code>ALIYUN::EBS::DiskReplicaPairAddition</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:47.577Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ebs.$Module.class, fqn = "@alicloud/ros-cdk-ebs.RosDiskReplicaPairAdditionProps")
@software.amazon.jsii.Jsii.Proxy(RosDiskReplicaPairAdditionProps.Jsii$Proxy.class)
public interface RosDiskReplicaPairAdditionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReplicaGroupId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReplicaPairId();

    /**
     * @return a {@link Builder} of {@link RosDiskReplicaPairAdditionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDiskReplicaPairAdditionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDiskReplicaPairAdditionProps> {
        java.lang.Object replicaGroupId;
        java.lang.Object replicaPairId;

        /**
         * Sets the value of {@link RosDiskReplicaPairAdditionProps#getReplicaGroupId}
         * @param replicaGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder replicaGroupId(java.lang.String replicaGroupId) {
            this.replicaGroupId = replicaGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaPairAdditionProps#getReplicaGroupId}
         * @param replicaGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder replicaGroupId(com.aliyun.ros.cdk.core.IResolvable replicaGroupId) {
            this.replicaGroupId = replicaGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaPairAdditionProps#getReplicaPairId}
         * @param replicaPairId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder replicaPairId(java.lang.String replicaPairId) {
            this.replicaPairId = replicaPairId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaPairAdditionProps#getReplicaPairId}
         * @param replicaPairId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder replicaPairId(com.aliyun.ros.cdk.core.IResolvable replicaPairId) {
            this.replicaPairId = replicaPairId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDiskReplicaPairAdditionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDiskReplicaPairAdditionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDiskReplicaPairAdditionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDiskReplicaPairAdditionProps {
        private final java.lang.Object replicaGroupId;
        private final java.lang.Object replicaPairId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.replicaGroupId = software.amazon.jsii.Kernel.get(this, "replicaGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.replicaPairId = software.amazon.jsii.Kernel.get(this, "replicaPairId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.replicaGroupId = java.util.Objects.requireNonNull(builder.replicaGroupId, "replicaGroupId is required");
            this.replicaPairId = java.util.Objects.requireNonNull(builder.replicaPairId, "replicaPairId is required");
        }

        @Override
        public final java.lang.Object getReplicaGroupId() {
            return this.replicaGroupId;
        }

        @Override
        public final java.lang.Object getReplicaPairId() {
            return this.replicaPairId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("replicaGroupId", om.valueToTree(this.getReplicaGroupId()));
            data.set("replicaPairId", om.valueToTree(this.getReplicaPairId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ebs.RosDiskReplicaPairAdditionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDiskReplicaPairAdditionProps.Jsii$Proxy that = (RosDiskReplicaPairAdditionProps.Jsii$Proxy) o;

            if (!replicaGroupId.equals(that.replicaGroupId)) return false;
            return this.replicaPairId.equals(that.replicaPairId);
        }

        @Override
        public final int hashCode() {
            int result = this.replicaGroupId.hashCode();
            result = 31 * result + (this.replicaPairId.hashCode());
            return result;
        }
    }
}
