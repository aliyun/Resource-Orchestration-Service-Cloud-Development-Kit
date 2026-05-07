package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>RosHoneypotNode</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotnode
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.727Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosHoneypotNodeProps")
@software.amazon.jsii.Jsii.Proxy(RosHoneypotNodeProps.Jsii$Proxy.class)
public interface RosHoneypotNodeProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNodeName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllowHoneypotAccessInternet() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAvailableProbeNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupProbeIpList() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosHoneypotNodeProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosHoneypotNodeProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosHoneypotNodeProps> {
        java.lang.Object nodeName;
        java.lang.Object allowHoneypotAccessInternet;
        java.lang.Object availableProbeNum;
        java.lang.Object securityGroupProbeIpList;

        /**
         * Sets the value of {@link RosHoneypotNodeProps#getNodeName}
         * @param nodeName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nodeName(java.lang.String nodeName) {
            this.nodeName = nodeName;
            return this;
        }

        /**
         * Sets the value of {@link RosHoneypotNodeProps#getNodeName}
         * @param nodeName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nodeName(com.aliyun.ros.cdk.core.IResolvable nodeName) {
            this.nodeName = nodeName;
            return this;
        }

        /**
         * Sets the value of {@link RosHoneypotNodeProps#getAllowHoneypotAccessInternet}
         * @param allowHoneypotAccessInternet the value to be set.
         * @return {@code this}
         */
        public Builder allowHoneypotAccessInternet(java.lang.Boolean allowHoneypotAccessInternet) {
            this.allowHoneypotAccessInternet = allowHoneypotAccessInternet;
            return this;
        }

        /**
         * Sets the value of {@link RosHoneypotNodeProps#getAllowHoneypotAccessInternet}
         * @param allowHoneypotAccessInternet the value to be set.
         * @return {@code this}
         */
        public Builder allowHoneypotAccessInternet(com.aliyun.ros.cdk.core.IResolvable allowHoneypotAccessInternet) {
            this.allowHoneypotAccessInternet = allowHoneypotAccessInternet;
            return this;
        }

        /**
         * Sets the value of {@link RosHoneypotNodeProps#getAvailableProbeNum}
         * @param availableProbeNum the value to be set.
         * @return {@code this}
         */
        public Builder availableProbeNum(java.lang.Number availableProbeNum) {
            this.availableProbeNum = availableProbeNum;
            return this;
        }

        /**
         * Sets the value of {@link RosHoneypotNodeProps#getAvailableProbeNum}
         * @param availableProbeNum the value to be set.
         * @return {@code this}
         */
        public Builder availableProbeNum(com.aliyun.ros.cdk.core.IResolvable availableProbeNum) {
            this.availableProbeNum = availableProbeNum;
            return this;
        }

        /**
         * Sets the value of {@link RosHoneypotNodeProps#getSecurityGroupProbeIpList}
         * @param securityGroupProbeIpList the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupProbeIpList(com.aliyun.ros.cdk.core.IResolvable securityGroupProbeIpList) {
            this.securityGroupProbeIpList = securityGroupProbeIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosHoneypotNodeProps#getSecurityGroupProbeIpList}
         * @param securityGroupProbeIpList the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupProbeIpList(java.util.List<? extends java.lang.Object> securityGroupProbeIpList) {
            this.securityGroupProbeIpList = securityGroupProbeIpList;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosHoneypotNodeProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosHoneypotNodeProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosHoneypotNodeProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosHoneypotNodeProps {
        private final java.lang.Object nodeName;
        private final java.lang.Object allowHoneypotAccessInternet;
        private final java.lang.Object availableProbeNum;
        private final java.lang.Object securityGroupProbeIpList;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.nodeName = software.amazon.jsii.Kernel.get(this, "nodeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allowHoneypotAccessInternet = software.amazon.jsii.Kernel.get(this, "allowHoneypotAccessInternet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.availableProbeNum = software.amazon.jsii.Kernel.get(this, "availableProbeNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupProbeIpList = software.amazon.jsii.Kernel.get(this, "securityGroupProbeIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.nodeName = java.util.Objects.requireNonNull(builder.nodeName, "nodeName is required");
            this.allowHoneypotAccessInternet = builder.allowHoneypotAccessInternet;
            this.availableProbeNum = builder.availableProbeNum;
            this.securityGroupProbeIpList = builder.securityGroupProbeIpList;
        }

        @Override
        public final java.lang.Object getNodeName() {
            return this.nodeName;
        }

        @Override
        public final java.lang.Object getAllowHoneypotAccessInternet() {
            return this.allowHoneypotAccessInternet;
        }

        @Override
        public final java.lang.Object getAvailableProbeNum() {
            return this.availableProbeNum;
        }

        @Override
        public final java.lang.Object getSecurityGroupProbeIpList() {
            return this.securityGroupProbeIpList;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("nodeName", om.valueToTree(this.getNodeName()));
            if (this.getAllowHoneypotAccessInternet() != null) {
                data.set("allowHoneypotAccessInternet", om.valueToTree(this.getAllowHoneypotAccessInternet()));
            }
            if (this.getAvailableProbeNum() != null) {
                data.set("availableProbeNum", om.valueToTree(this.getAvailableProbeNum()));
            }
            if (this.getSecurityGroupProbeIpList() != null) {
                data.set("securityGroupProbeIpList", om.valueToTree(this.getSecurityGroupProbeIpList()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.RosHoneypotNodeProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosHoneypotNodeProps.Jsii$Proxy that = (RosHoneypotNodeProps.Jsii$Proxy) o;

            if (!nodeName.equals(that.nodeName)) return false;
            if (this.allowHoneypotAccessInternet != null ? !this.allowHoneypotAccessInternet.equals(that.allowHoneypotAccessInternet) : that.allowHoneypotAccessInternet != null) return false;
            if (this.availableProbeNum != null ? !this.availableProbeNum.equals(that.availableProbeNum) : that.availableProbeNum != null) return false;
            return this.securityGroupProbeIpList != null ? this.securityGroupProbeIpList.equals(that.securityGroupProbeIpList) : that.securityGroupProbeIpList == null;
        }

        @Override
        public final int hashCode() {
            int result = this.nodeName.hashCode();
            result = 31 * result + (this.allowHoneypotAccessInternet != null ? this.allowHoneypotAccessInternet.hashCode() : 0);
            result = 31 * result + (this.availableProbeNum != null ? this.availableProbeNum.hashCode() : 0);
            result = 31 * result + (this.securityGroupProbeIpList != null ? this.securityGroupProbeIpList.hashCode() : 0);
            return result;
        }
    }
}
