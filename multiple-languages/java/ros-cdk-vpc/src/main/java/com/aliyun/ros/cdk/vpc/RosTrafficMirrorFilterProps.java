package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosTrafficMirrorFilter</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorfilter
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.471Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosTrafficMirrorFilterProps")
@software.amazon.jsii.Jsii.Proxy(RosTrafficMirrorFilterProps.Jsii$Proxy.class)
public interface RosTrafficMirrorFilterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEgressRules() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIngressRules() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTrafficMirrorFilterDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTrafficMirrorFilterName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTrafficMirrorFilterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTrafficMirrorFilterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTrafficMirrorFilterProps> {
        java.lang.Object egressRules;
        java.lang.Object ingressRules;
        java.lang.Object trafficMirrorFilterDescription;
        java.lang.Object trafficMirrorFilterName;

        /**
         * Sets the value of {@link RosTrafficMirrorFilterProps#getEgressRules}
         * @param egressRules the value to be set.
         * @return {@code this}
         */
        public Builder egressRules(com.aliyun.ros.cdk.core.IResolvable egressRules) {
            this.egressRules = egressRules;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorFilterProps#getEgressRules}
         * @param egressRules the value to be set.
         * @return {@code this}
         */
        public Builder egressRules(java.util.List<? extends java.lang.Object> egressRules) {
            this.egressRules = egressRules;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorFilterProps#getIngressRules}
         * @param ingressRules the value to be set.
         * @return {@code this}
         */
        public Builder ingressRules(com.aliyun.ros.cdk.core.IResolvable ingressRules) {
            this.ingressRules = ingressRules;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorFilterProps#getIngressRules}
         * @param ingressRules the value to be set.
         * @return {@code this}
         */
        public Builder ingressRules(java.util.List<? extends java.lang.Object> ingressRules) {
            this.ingressRules = ingressRules;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorFilterProps#getTrafficMirrorFilterDescription}
         * @param trafficMirrorFilterDescription the value to be set.
         * @return {@code this}
         */
        public Builder trafficMirrorFilterDescription(java.lang.String trafficMirrorFilterDescription) {
            this.trafficMirrorFilterDescription = trafficMirrorFilterDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorFilterProps#getTrafficMirrorFilterDescription}
         * @param trafficMirrorFilterDescription the value to be set.
         * @return {@code this}
         */
        public Builder trafficMirrorFilterDescription(com.aliyun.ros.cdk.core.IResolvable trafficMirrorFilterDescription) {
            this.trafficMirrorFilterDescription = trafficMirrorFilterDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorFilterProps#getTrafficMirrorFilterName}
         * @param trafficMirrorFilterName the value to be set.
         * @return {@code this}
         */
        public Builder trafficMirrorFilterName(java.lang.String trafficMirrorFilterName) {
            this.trafficMirrorFilterName = trafficMirrorFilterName;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorFilterProps#getTrafficMirrorFilterName}
         * @param trafficMirrorFilterName the value to be set.
         * @return {@code this}
         */
        public Builder trafficMirrorFilterName(com.aliyun.ros.cdk.core.IResolvable trafficMirrorFilterName) {
            this.trafficMirrorFilterName = trafficMirrorFilterName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTrafficMirrorFilterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTrafficMirrorFilterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTrafficMirrorFilterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTrafficMirrorFilterProps {
        private final java.lang.Object egressRules;
        private final java.lang.Object ingressRules;
        private final java.lang.Object trafficMirrorFilterDescription;
        private final java.lang.Object trafficMirrorFilterName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.egressRules = software.amazon.jsii.Kernel.get(this, "egressRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ingressRules = software.amazon.jsii.Kernel.get(this, "ingressRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trafficMirrorFilterDescription = software.amazon.jsii.Kernel.get(this, "trafficMirrorFilterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trafficMirrorFilterName = software.amazon.jsii.Kernel.get(this, "trafficMirrorFilterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.egressRules = builder.egressRules;
            this.ingressRules = builder.ingressRules;
            this.trafficMirrorFilterDescription = builder.trafficMirrorFilterDescription;
            this.trafficMirrorFilterName = builder.trafficMirrorFilterName;
        }

        @Override
        public final java.lang.Object getEgressRules() {
            return this.egressRules;
        }

        @Override
        public final java.lang.Object getIngressRules() {
            return this.ingressRules;
        }

        @Override
        public final java.lang.Object getTrafficMirrorFilterDescription() {
            return this.trafficMirrorFilterDescription;
        }

        @Override
        public final java.lang.Object getTrafficMirrorFilterName() {
            return this.trafficMirrorFilterName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getEgressRules() != null) {
                data.set("egressRules", om.valueToTree(this.getEgressRules()));
            }
            if (this.getIngressRules() != null) {
                data.set("ingressRules", om.valueToTree(this.getIngressRules()));
            }
            if (this.getTrafficMirrorFilterDescription() != null) {
                data.set("trafficMirrorFilterDescription", om.valueToTree(this.getTrafficMirrorFilterDescription()));
            }
            if (this.getTrafficMirrorFilterName() != null) {
                data.set("trafficMirrorFilterName", om.valueToTree(this.getTrafficMirrorFilterName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosTrafficMirrorFilterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTrafficMirrorFilterProps.Jsii$Proxy that = (RosTrafficMirrorFilterProps.Jsii$Proxy) o;

            if (this.egressRules != null ? !this.egressRules.equals(that.egressRules) : that.egressRules != null) return false;
            if (this.ingressRules != null ? !this.ingressRules.equals(that.ingressRules) : that.ingressRules != null) return false;
            if (this.trafficMirrorFilterDescription != null ? !this.trafficMirrorFilterDescription.equals(that.trafficMirrorFilterDescription) : that.trafficMirrorFilterDescription != null) return false;
            return this.trafficMirrorFilterName != null ? this.trafficMirrorFilterName.equals(that.trafficMirrorFilterName) : that.trafficMirrorFilterName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.egressRules != null ? this.egressRules.hashCode() : 0;
            result = 31 * result + (this.ingressRules != null ? this.ingressRules.hashCode() : 0);
            result = 31 * result + (this.trafficMirrorFilterDescription != null ? this.trafficMirrorFilterDescription.hashCode() : 0);
            result = 31 * result + (this.trafficMirrorFilterName != null ? this.trafficMirrorFilterName.hashCode() : 0);
            return result;
        }
    }
}
