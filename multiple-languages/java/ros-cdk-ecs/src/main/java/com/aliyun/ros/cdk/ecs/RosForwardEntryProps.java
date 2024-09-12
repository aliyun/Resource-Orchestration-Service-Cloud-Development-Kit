package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>RosForwardEntry</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-forwardentry
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:26.035Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosForwardEntryProps")
@software.amazon.jsii.Jsii.Proxy(RosForwardEntryProps.Jsii$Proxy.class)
public interface RosForwardEntryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getExternalIp();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getExternalPort();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getForwardTableId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInternalIp();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInternalPort();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpProtocol();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getForwardEntryName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPortBreak() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosForwardEntryProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosForwardEntryProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosForwardEntryProps> {
        java.lang.Object externalIp;
        java.lang.Object externalPort;
        java.lang.Object forwardTableId;
        java.lang.Object internalIp;
        java.lang.Object internalPort;
        java.lang.Object ipProtocol;
        java.lang.Object forwardEntryName;
        java.lang.Object portBreak;

        /**
         * Sets the value of {@link RosForwardEntryProps#getExternalIp}
         * @param externalIp the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder externalIp(java.lang.String externalIp) {
            this.externalIp = externalIp;
            return this;
        }

        /**
         * Sets the value of {@link RosForwardEntryProps#getExternalIp}
         * @param externalIp the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder externalIp(com.aliyun.ros.cdk.core.IResolvable externalIp) {
            this.externalIp = externalIp;
            return this;
        }

        /**
         * Sets the value of {@link RosForwardEntryProps#getExternalPort}
         * @param externalPort the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder externalPort(java.lang.String externalPort) {
            this.externalPort = externalPort;
            return this;
        }

        /**
         * Sets the value of {@link RosForwardEntryProps#getExternalPort}
         * @param externalPort the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder externalPort(com.aliyun.ros.cdk.core.IResolvable externalPort) {
            this.externalPort = externalPort;
            return this;
        }

        /**
         * Sets the value of {@link RosForwardEntryProps#getForwardTableId}
         * @param forwardTableId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder forwardTableId(java.lang.String forwardTableId) {
            this.forwardTableId = forwardTableId;
            return this;
        }

        /**
         * Sets the value of {@link RosForwardEntryProps#getForwardTableId}
         * @param forwardTableId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder forwardTableId(com.aliyun.ros.cdk.core.IResolvable forwardTableId) {
            this.forwardTableId = forwardTableId;
            return this;
        }

        /**
         * Sets the value of {@link RosForwardEntryProps#getInternalIp}
         * @param internalIp the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder internalIp(java.lang.String internalIp) {
            this.internalIp = internalIp;
            return this;
        }

        /**
         * Sets the value of {@link RosForwardEntryProps#getInternalIp}
         * @param internalIp the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder internalIp(com.aliyun.ros.cdk.core.IResolvable internalIp) {
            this.internalIp = internalIp;
            return this;
        }

        /**
         * Sets the value of {@link RosForwardEntryProps#getInternalPort}
         * @param internalPort the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder internalPort(java.lang.String internalPort) {
            this.internalPort = internalPort;
            return this;
        }

        /**
         * Sets the value of {@link RosForwardEntryProps#getInternalPort}
         * @param internalPort the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder internalPort(com.aliyun.ros.cdk.core.IResolvable internalPort) {
            this.internalPort = internalPort;
            return this;
        }

        /**
         * Sets the value of {@link RosForwardEntryProps#getIpProtocol}
         * @param ipProtocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipProtocol(java.lang.String ipProtocol) {
            this.ipProtocol = ipProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosForwardEntryProps#getIpProtocol}
         * @param ipProtocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipProtocol(com.aliyun.ros.cdk.core.IResolvable ipProtocol) {
            this.ipProtocol = ipProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosForwardEntryProps#getForwardEntryName}
         * @param forwardEntryName the value to be set.
         * @return {@code this}
         */
        public Builder forwardEntryName(java.lang.String forwardEntryName) {
            this.forwardEntryName = forwardEntryName;
            return this;
        }

        /**
         * Sets the value of {@link RosForwardEntryProps#getForwardEntryName}
         * @param forwardEntryName the value to be set.
         * @return {@code this}
         */
        public Builder forwardEntryName(com.aliyun.ros.cdk.core.IResolvable forwardEntryName) {
            this.forwardEntryName = forwardEntryName;
            return this;
        }

        /**
         * Sets the value of {@link RosForwardEntryProps#getPortBreak}
         * @param portBreak the value to be set.
         * @return {@code this}
         */
        public Builder portBreak(java.lang.Boolean portBreak) {
            this.portBreak = portBreak;
            return this;
        }

        /**
         * Sets the value of {@link RosForwardEntryProps#getPortBreak}
         * @param portBreak the value to be set.
         * @return {@code this}
         */
        public Builder portBreak(com.aliyun.ros.cdk.core.IResolvable portBreak) {
            this.portBreak = portBreak;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosForwardEntryProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosForwardEntryProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosForwardEntryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosForwardEntryProps {
        private final java.lang.Object externalIp;
        private final java.lang.Object externalPort;
        private final java.lang.Object forwardTableId;
        private final java.lang.Object internalIp;
        private final java.lang.Object internalPort;
        private final java.lang.Object ipProtocol;
        private final java.lang.Object forwardEntryName;
        private final java.lang.Object portBreak;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.externalIp = software.amazon.jsii.Kernel.get(this, "externalIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.externalPort = software.amazon.jsii.Kernel.get(this, "externalPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.forwardTableId = software.amazon.jsii.Kernel.get(this, "forwardTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internalIp = software.amazon.jsii.Kernel.get(this, "internalIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internalPort = software.amazon.jsii.Kernel.get(this, "internalPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipProtocol = software.amazon.jsii.Kernel.get(this, "ipProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.forwardEntryName = software.amazon.jsii.Kernel.get(this, "forwardEntryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.portBreak = software.amazon.jsii.Kernel.get(this, "portBreak", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.externalIp = java.util.Objects.requireNonNull(builder.externalIp, "externalIp is required");
            this.externalPort = java.util.Objects.requireNonNull(builder.externalPort, "externalPort is required");
            this.forwardTableId = java.util.Objects.requireNonNull(builder.forwardTableId, "forwardTableId is required");
            this.internalIp = java.util.Objects.requireNonNull(builder.internalIp, "internalIp is required");
            this.internalPort = java.util.Objects.requireNonNull(builder.internalPort, "internalPort is required");
            this.ipProtocol = java.util.Objects.requireNonNull(builder.ipProtocol, "ipProtocol is required");
            this.forwardEntryName = builder.forwardEntryName;
            this.portBreak = builder.portBreak;
        }

        @Override
        public final java.lang.Object getExternalIp() {
            return this.externalIp;
        }

        @Override
        public final java.lang.Object getExternalPort() {
            return this.externalPort;
        }

        @Override
        public final java.lang.Object getForwardTableId() {
            return this.forwardTableId;
        }

        @Override
        public final java.lang.Object getInternalIp() {
            return this.internalIp;
        }

        @Override
        public final java.lang.Object getInternalPort() {
            return this.internalPort;
        }

        @Override
        public final java.lang.Object getIpProtocol() {
            return this.ipProtocol;
        }

        @Override
        public final java.lang.Object getForwardEntryName() {
            return this.forwardEntryName;
        }

        @Override
        public final java.lang.Object getPortBreak() {
            return this.portBreak;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("externalIp", om.valueToTree(this.getExternalIp()));
            data.set("externalPort", om.valueToTree(this.getExternalPort()));
            data.set("forwardTableId", om.valueToTree(this.getForwardTableId()));
            data.set("internalIp", om.valueToTree(this.getInternalIp()));
            data.set("internalPort", om.valueToTree(this.getInternalPort()));
            data.set("ipProtocol", om.valueToTree(this.getIpProtocol()));
            if (this.getForwardEntryName() != null) {
                data.set("forwardEntryName", om.valueToTree(this.getForwardEntryName()));
            }
            if (this.getPortBreak() != null) {
                data.set("portBreak", om.valueToTree(this.getPortBreak()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosForwardEntryProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosForwardEntryProps.Jsii$Proxy that = (RosForwardEntryProps.Jsii$Proxy) o;

            if (!externalIp.equals(that.externalIp)) return false;
            if (!externalPort.equals(that.externalPort)) return false;
            if (!forwardTableId.equals(that.forwardTableId)) return false;
            if (!internalIp.equals(that.internalIp)) return false;
            if (!internalPort.equals(that.internalPort)) return false;
            if (!ipProtocol.equals(that.ipProtocol)) return false;
            if (this.forwardEntryName != null ? !this.forwardEntryName.equals(that.forwardEntryName) : that.forwardEntryName != null) return false;
            return this.portBreak != null ? this.portBreak.equals(that.portBreak) : that.portBreak == null;
        }

        @Override
        public final int hashCode() {
            int result = this.externalIp.hashCode();
            result = 31 * result + (this.externalPort.hashCode());
            result = 31 * result + (this.forwardTableId.hashCode());
            result = 31 * result + (this.internalIp.hashCode());
            result = 31 * result + (this.internalPort.hashCode());
            result = 31 * result + (this.ipProtocol.hashCode());
            result = 31 * result + (this.forwardEntryName != null ? this.forwardEntryName.hashCode() : 0);
            result = 31 * result + (this.portBreak != null ? this.portBreak.hashCode() : 0);
            return result;
        }
    }
}
