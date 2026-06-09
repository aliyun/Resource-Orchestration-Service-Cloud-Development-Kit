package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>RosRoutineRoute</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-routineroute
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:49:07.874Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosRoutineRouteProps")
@software.amazon.jsii.Jsii.Proxy(RosRoutineRouteProps.Jsii$Proxy.class)
public interface RosRoutineRouteProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRoutineName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBypass() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFallback() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRule() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSequence() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRoutineRouteProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRoutineRouteProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRoutineRouteProps> {
        java.lang.Object routineName;
        java.lang.Object siteId;
        java.lang.Object bypass;
        java.lang.Object fallback;
        java.lang.Object routeEnable;
        java.lang.Object routeName;
        java.lang.Object rule;
        java.lang.Object sequence;

        /**
         * Sets the value of {@link RosRoutineRouteProps#getRoutineName}
         * @param routineName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routineName(java.lang.String routineName) {
            this.routineName = routineName;
            return this;
        }

        /**
         * Sets the value of {@link RosRoutineRouteProps#getRoutineName}
         * @param routineName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routineName(com.aliyun.ros.cdk.core.IResolvable routineName) {
            this.routineName = routineName;
            return this;
        }

        /**
         * Sets the value of {@link RosRoutineRouteProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosRoutineRouteProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosRoutineRouteProps#getBypass}
         * @param bypass the value to be set.
         * @return {@code this}
         */
        public Builder bypass(java.lang.String bypass) {
            this.bypass = bypass;
            return this;
        }

        /**
         * Sets the value of {@link RosRoutineRouteProps#getBypass}
         * @param bypass the value to be set.
         * @return {@code this}
         */
        public Builder bypass(com.aliyun.ros.cdk.core.IResolvable bypass) {
            this.bypass = bypass;
            return this;
        }

        /**
         * Sets the value of {@link RosRoutineRouteProps#getFallback}
         * @param fallback the value to be set.
         * @return {@code this}
         */
        public Builder fallback(java.lang.String fallback) {
            this.fallback = fallback;
            return this;
        }

        /**
         * Sets the value of {@link RosRoutineRouteProps#getFallback}
         * @param fallback the value to be set.
         * @return {@code this}
         */
        public Builder fallback(com.aliyun.ros.cdk.core.IResolvable fallback) {
            this.fallback = fallback;
            return this;
        }

        /**
         * Sets the value of {@link RosRoutineRouteProps#getRouteEnable}
         * @param routeEnable the value to be set.
         * @return {@code this}
         */
        public Builder routeEnable(java.lang.String routeEnable) {
            this.routeEnable = routeEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosRoutineRouteProps#getRouteEnable}
         * @param routeEnable the value to be set.
         * @return {@code this}
         */
        public Builder routeEnable(com.aliyun.ros.cdk.core.IResolvable routeEnable) {
            this.routeEnable = routeEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosRoutineRouteProps#getRouteName}
         * @param routeName the value to be set.
         * @return {@code this}
         */
        public Builder routeName(java.lang.String routeName) {
            this.routeName = routeName;
            return this;
        }

        /**
         * Sets the value of {@link RosRoutineRouteProps#getRouteName}
         * @param routeName the value to be set.
         * @return {@code this}
         */
        public Builder routeName(com.aliyun.ros.cdk.core.IResolvable routeName) {
            this.routeName = routeName;
            return this;
        }

        /**
         * Sets the value of {@link RosRoutineRouteProps#getRule}
         * @param rule the value to be set.
         * @return {@code this}
         */
        public Builder rule(java.lang.String rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link RosRoutineRouteProps#getRule}
         * @param rule the value to be set.
         * @return {@code this}
         */
        public Builder rule(com.aliyun.ros.cdk.core.IResolvable rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link RosRoutineRouteProps#getSequence}
         * @param sequence the value to be set.
         * @return {@code this}
         */
        public Builder sequence(java.lang.Number sequence) {
            this.sequence = sequence;
            return this;
        }

        /**
         * Sets the value of {@link RosRoutineRouteProps#getSequence}
         * @param sequence the value to be set.
         * @return {@code this}
         */
        public Builder sequence(com.aliyun.ros.cdk.core.IResolvable sequence) {
            this.sequence = sequence;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRoutineRouteProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRoutineRouteProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRoutineRouteProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRoutineRouteProps {
        private final java.lang.Object routineName;
        private final java.lang.Object siteId;
        private final java.lang.Object bypass;
        private final java.lang.Object fallback;
        private final java.lang.Object routeEnable;
        private final java.lang.Object routeName;
        private final java.lang.Object rule;
        private final java.lang.Object sequence;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.routineName = software.amazon.jsii.Kernel.get(this, "routineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bypass = software.amazon.jsii.Kernel.get(this, "bypass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fallback = software.amazon.jsii.Kernel.get(this, "fallback", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeEnable = software.amazon.jsii.Kernel.get(this, "routeEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeName = software.amazon.jsii.Kernel.get(this, "routeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rule = software.amazon.jsii.Kernel.get(this, "rule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sequence = software.amazon.jsii.Kernel.get(this, "sequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.routineName = java.util.Objects.requireNonNull(builder.routineName, "routineName is required");
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.bypass = builder.bypass;
            this.fallback = builder.fallback;
            this.routeEnable = builder.routeEnable;
            this.routeName = builder.routeName;
            this.rule = builder.rule;
            this.sequence = builder.sequence;
        }

        @Override
        public final java.lang.Object getRoutineName() {
            return this.routineName;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getBypass() {
            return this.bypass;
        }

        @Override
        public final java.lang.Object getFallback() {
            return this.fallback;
        }

        @Override
        public final java.lang.Object getRouteEnable() {
            return this.routeEnable;
        }

        @Override
        public final java.lang.Object getRouteName() {
            return this.routeName;
        }

        @Override
        public final java.lang.Object getRule() {
            return this.rule;
        }

        @Override
        public final java.lang.Object getSequence() {
            return this.sequence;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("routineName", om.valueToTree(this.getRoutineName()));
            data.set("siteId", om.valueToTree(this.getSiteId()));
            if (this.getBypass() != null) {
                data.set("bypass", om.valueToTree(this.getBypass()));
            }
            if (this.getFallback() != null) {
                data.set("fallback", om.valueToTree(this.getFallback()));
            }
            if (this.getRouteEnable() != null) {
                data.set("routeEnable", om.valueToTree(this.getRouteEnable()));
            }
            if (this.getRouteName() != null) {
                data.set("routeName", om.valueToTree(this.getRouteName()));
            }
            if (this.getRule() != null) {
                data.set("rule", om.valueToTree(this.getRule()));
            }
            if (this.getSequence() != null) {
                data.set("sequence", om.valueToTree(this.getSequence()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosRoutineRouteProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRoutineRouteProps.Jsii$Proxy that = (RosRoutineRouteProps.Jsii$Proxy) o;

            if (!routineName.equals(that.routineName)) return false;
            if (!siteId.equals(that.siteId)) return false;
            if (this.bypass != null ? !this.bypass.equals(that.bypass) : that.bypass != null) return false;
            if (this.fallback != null ? !this.fallback.equals(that.fallback) : that.fallback != null) return false;
            if (this.routeEnable != null ? !this.routeEnable.equals(that.routeEnable) : that.routeEnable != null) return false;
            if (this.routeName != null ? !this.routeName.equals(that.routeName) : that.routeName != null) return false;
            if (this.rule != null ? !this.rule.equals(that.rule) : that.rule != null) return false;
            return this.sequence != null ? this.sequence.equals(that.sequence) : that.sequence == null;
        }

        @Override
        public final int hashCode() {
            int result = this.routineName.hashCode();
            result = 31 * result + (this.siteId.hashCode());
            result = 31 * result + (this.bypass != null ? this.bypass.hashCode() : 0);
            result = 31 * result + (this.fallback != null ? this.fallback.hashCode() : 0);
            result = 31 * result + (this.routeEnable != null ? this.routeEnable.hashCode() : 0);
            result = 31 * result + (this.routeName != null ? this.routeName.hashCode() : 0);
            result = 31 * result + (this.rule != null ? this.rule.hashCode() : 0);
            result = 31 * result + (this.sequence != null ? this.sequence.hashCode() : 0);
            return result;
        }
    }
}
