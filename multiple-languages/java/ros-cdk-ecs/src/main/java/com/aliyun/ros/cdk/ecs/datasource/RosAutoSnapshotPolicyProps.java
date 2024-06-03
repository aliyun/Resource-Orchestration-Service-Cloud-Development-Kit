package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>RosAutoSnapshotPolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:51.746Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.RosAutoSnapshotPolicyProps")
@software.amazon.jsii.Jsii.Proxy(RosAutoSnapshotPolicyProps.Jsii$Proxy.class)
public interface RosAutoSnapshotPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAutoSnapshotPolicyId();

    /**
     * @return a {@link Builder} of {@link RosAutoSnapshotPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAutoSnapshotPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAutoSnapshotPolicyProps> {
        java.lang.Object autoSnapshotPolicyId;

        /**
         * Sets the value of {@link RosAutoSnapshotPolicyProps#getAutoSnapshotPolicyId}
         * @param autoSnapshotPolicyId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder autoSnapshotPolicyId(java.lang.String autoSnapshotPolicyId) {
            this.autoSnapshotPolicyId = autoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link RosAutoSnapshotPolicyProps#getAutoSnapshotPolicyId}
         * @param autoSnapshotPolicyId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder autoSnapshotPolicyId(com.aliyun.ros.cdk.core.IResolvable autoSnapshotPolicyId) {
            this.autoSnapshotPolicyId = autoSnapshotPolicyId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAutoSnapshotPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAutoSnapshotPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAutoSnapshotPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAutoSnapshotPolicyProps {
        private final java.lang.Object autoSnapshotPolicyId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.autoSnapshotPolicyId = software.amazon.jsii.Kernel.get(this, "autoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.autoSnapshotPolicyId = java.util.Objects.requireNonNull(builder.autoSnapshotPolicyId, "autoSnapshotPolicyId is required");
        }

        @Override
        public final java.lang.Object getAutoSnapshotPolicyId() {
            return this.autoSnapshotPolicyId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("autoSnapshotPolicyId", om.valueToTree(this.getAutoSnapshotPolicyId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.RosAutoSnapshotPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAutoSnapshotPolicyProps.Jsii$Proxy that = (RosAutoSnapshotPolicyProps.Jsii$Proxy) o;

            return this.autoSnapshotPolicyId.equals(that.autoSnapshotPolicyId);
        }

        @Override
        public final int hashCode() {
            int result = this.autoSnapshotPolicyId.hashCode();
            return result;
        }
    }
}
